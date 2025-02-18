'use client';

// import { ArtistForm } from '@/components/ArtistForm';
// import { ArtistList } from '@/components/ArtistList';
import { StudioPortfolioList } from '@/components/StudioPortfolioList';
import { createClient } from '@/utils/supabase/client';
// import { Tables } from '@/utils/supabase/supabase';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  // const [artists, setArtists] = useState<Tables<'artists'>[]>([]);
  // const [editingArtist, setEditingArtist] = useState<Tables<'artists'> | null>(null);
  const [studioImages, setStudioImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    // fetchArtists();
    fetchStudioPortfolio();
  }, []);

  // async function fetchArtists() {
  //   const { data, error } = await supabase.from('artists').select('*').order('name');

  //   if (error) {
  //     console.error('Error fetching artists:', error);
  //   } else {
  //     setArtists(data || []);
  //   }
  // }

  async function fetchStudioPortfolio() {
    const { data, error } = await supabase.storage.from('artist-images').list('studio');

    if (!error && data) {
      setStudioImages(data.map((file) => `studio/${file.name}`));
    }
  }

  // async function handleAddArtist(artistData: Omit<Tables<'artists'>, 'id'>) {
  //   const { error } = await supabase.from('artists').insert([artistData]).select();

  //   if (error) {
  //     console.error('Error adding artist:', error);
  //   } else {
  //     fetchArtists();
  //   }
  // }

  // async function handleUpdateArtist(id: number, artistData: Omit<Tables<'artists'>, 'id'>) {
  //   const { error } = await supabase.from('artists').update(artistData).eq('id', id);

  //   if (error) {
  //     console.error('Error updating artist:', error);
  //   } else {
  //     fetchArtists();
  //     setEditingArtist(null);
  //   }
  // }

  // async function handleDeleteArtist(id: number) {
  //   const { data: artist } = (await supabase
  //     .from('artists')
  //     .select('image, portfolio')
  //     .eq('id', id)
  //     .single()) as { data: Tables<'artists'> | null };

  //   if (artist) {
  //     // Collect all images to delete (profile image + portfolio)
  //     const imagesToDelete = artist.portfolio;
  //     imagesToDelete.push(artist.image);

  //     // Delete images from storage
  //     if (artist.portfolio.length > 0) {
  //       const { error: storageError } = await supabase.storage
  //         .from('artist-images')
  //         .remove(imagesToDelete);

  //       if (storageError) {
  //         console.error('Error deleting images:', storageError);
  //       }
  //     }
  //   }

  //   const { error } = await supabase.from('artists').delete().eq('id', id);

  //   if (error) {
  //     console.error('Error deleting artist:', error);
  //   } else {
  //     fetchArtists();
  //   }
  // }

  // async function handleDeleteImage(artistId: number, imageUrl: string) {
  //   // First, remove the image from storage
  //   const { error: storageError } = await supabase.storage.from('artist-images').remove([imageUrl]);

  //   if (storageError) {
  //     console.error('Error deleting image from storage:', storageError.message);
  //     return;
  //   }

  //   // Then, update the artist's portfolio array to remove this image
  //   const artist = artists.find((a) => a.id === artistId);
  //   if (!artist?.portfolio) return;

  //   const updatedPortfolio = artist.portfolio.filter((img) => img !== imageUrl);

  //   const { error: updateError } = await supabase
  //     .from('artists')
  //     .update({ portfolio: updatedPortfolio })
  //     .eq('id', artistId);

  //   if (updateError) {
  //     console.error('Error updating artist portfolio:', updateError);
  //   } else {
  //     fetchArtists(); // Refresh the list
  //   }
  // }

  async function handleDeleteStudioImage(filePath: string) {
    const { error } = await supabase.storage.from('artist-images').remove([filePath]);

    if (!error) {
      setStudioImages((prev) => prev.filter((path) => path !== filePath));
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const files = Array.from(e.target.files || []);

      // Check if files exceed limit
      if (files.length > 10) {
        alert('You can only upload up to 10 images at once');
        return;
      }

      if (files.length === 0) return;

      setUploading(true);

      // Rest of your upload logic
      const uploadPromises = files.map((file) => {
        const filePath = `studio/${Date.now()}-${file.name}`;
        return supabase.storage.from('artist-images').upload(filePath, file);
      });

      const results = await Promise.all(uploadPromises);

      // Check if any uploads failed
      const hasErrors = results.some((result) => result.error);
      if (hasErrors) {
        console.error(
          'Some uploads failed:',
          results.filter((r) => r.error).map((r) => r.error)
        );
      }

      // Refresh the portfolio regardless of partial failures
      await fetchStudioPortfolio();
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-12">Tattoo Artist Admin</h1>

      {/* Studio Portfolio Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Studio Portfolio</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Upload Studio Image</h3>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleUpload}
                disabled={uploading}
                className="file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
                title="You can select up to 10 images"
                // Note: HTML attribute maxLength doesn't work for file inputs,
                // that's why we need the JavaScript check above
              />
              {uploading && <span>Uploading...</span>}
            </label>
          </div>

          <StudioPortfolioList images={studioImages} onDelete={handleDeleteStudioImage} />
        </div>
      </div>

      {/* Existing Artist Management */}
      {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {editingArtist ? 'Edit Artist' : 'Add New Artist'}
          </h2>
          <ArtistForm
            onSubmit={
              editingArtist ? (data) => handleUpdateArtist(editingArtist.id, data) : handleAddArtist
            }
            initialData={editingArtist}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Artist List</h2>
          <ArtistList
            artists={artists}
            onEdit={setEditingArtist}
            onDelete={handleDeleteArtist}
            onDeleteImage={handleDeleteImage}
          />
        </div>
      </div> */}
    </div>
  );
}
