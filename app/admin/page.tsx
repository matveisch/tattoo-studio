'use client';

import { ArtistForm } from '@/components/ArtistForm';
import { ArtistList } from '@/components/ArtistList';
import { StudioPortfolioForm } from '@/components/StudioPortfolioForm';
import { StudioPortfolioList } from '@/components/StudioPortfolioList';
import { createClient } from '@/utils/supabase/client';
import { Tables } from '@/utils/supabase/supabase';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [artists, setArtists] = useState<Tables<'artists'>[]>([]);
  const [editingArtist, setEditingArtist] = useState<Tables<'artists'> | null>(null);
  const [studioImages, setStudioImages] = useState<string[]>([]);
  const supabase = createClient();

  useEffect(() => {
    fetchArtists();
    fetchStudioPortfolio();
  }, []);

  async function fetchArtists() {
    const { data, error } = await supabase.from('artists').select('*').order('name');

    if (error) {
      console.error('Error fetching artists:', error);
    } else {
      setArtists(data || []);
    }
  }

  async function fetchStudioPortfolio() {
    const { data, error } = await supabase.storage.from('artist-images').list('studio');

    if (!error && data) {
      setStudioImages(data.map((file) => `studio/${file.name}`));
    }
  }

  async function handleAddArtist(artistData: Omit<Tables<'artists'>, 'id'>) {
    const { error } = await supabase.from('artists').insert([artistData]).select();

    if (error) {
      console.error('Error adding artist:', error);
    } else {
      fetchArtists();
    }
  }

  async function handleUpdateArtist(id: number, artistData: Omit<Tables<'artists'>, 'id'>) {
    const { error } = await supabase.from('artists').update(artistData).eq('id', id);

    if (error) {
      console.error('Error updating artist:', error);
    } else {
      fetchArtists();
      setEditingArtist(null);
    }
  }

  async function handleDeleteArtist(id: number) {
    const { data: artist } = (await supabase
      .from('artists')
      .select('image, portfolio')
      .eq('id', id)
      .single()) as { data: Tables<'artists'> | null };

    if (artist) {
      // Collect all images to delete (profile image + portfolio)
      const imagesToDelete = artist.portfolio;
      imagesToDelete.push(artist.image);

      // Delete images from storage
      if (artist.portfolio.length > 0) {
        const { error: storageError } = await supabase.storage
          .from('artist-images')
          .remove(imagesToDelete);

        if (storageError) {
          console.error('Error deleting images:', storageError);
        }
      }
    }

    const { error } = await supabase.from('artists').delete().eq('id', id);

    if (error) {
      console.error('Error deleting artist:', error);
    } else {
      fetchArtists();
    }
  }

  async function handleDeleteImage(artistId: number, imageUrl: string) {
    // First, remove the image from storage
    const { error: storageError } = await supabase.storage.from('artist-images').remove([imageUrl]);

    if (storageError) {
      console.error('Error deleting image from storage:', storageError.message);
      return;
    }

    // Then, update the artist's portfolio array to remove this image
    const artist = artists.find((a) => a.id === artistId);
    if (!artist?.portfolio) return;

    const updatedPortfolio = artist.portfolio.filter((img) => img !== imageUrl);

    const { error: updateError } = await supabase
      .from('artists')
      .update({ portfolio: updatedPortfolio })
      .eq('id', artistId);

    if (updateError) {
      console.error('Error updating artist portfolio:', updateError);
    } else {
      fetchArtists(); // Refresh the list
    }
  }

  async function handleStudioUpload() {
    await fetchStudioPortfolio(); // Refresh the list after upload
  }

  async function handleDeleteStudioImage(filePath: string) {
    const { error } = await supabase.storage.from('artist-images').remove([filePath]);

    if (!error) {
      setStudioImages((prev) => prev.filter((path) => path !== filePath));
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-12">Tattoo Artist Admin</h1>

      {/* Studio Portfolio Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Studio Portfolio</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]">
          <StudioPortfolioForm onUpload={handleStudioUpload} />
          <StudioPortfolioList images={studioImages} onDelete={handleDeleteStudioImage} />
        </div>
      </div>

      {/* Existing Artist Management */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]">
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
      </div>
    </div>
  );
}
