import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

interface ArtistFormProps {
  onSubmit: (data: any) => void;
  initialData?: any;
}

export function ArtistForm({ onSubmit, initialData }: ArtistFormProps) {
  const [name, setName] = useState('');
  const [style, setStyle] = useState('');
  const [bio, setBio] = useState('');
  const [instagram, setInstagram] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [portfolioImages, setPortfolioImages] = useState<File[]>([]);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setStyle(initialData.style || '');
      setBio(initialData.bio || '');
      setInstagram(initialData.instagram || '');
    }
  }, [initialData]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let profileImageUrl = initialData?.profile_image;
    let portfolioImageUrls = initialData?.portfolio || [];

    if (profileImage) {
      const { data, error } = await supabase.storage
        .from('artist-images')
        .upload(`profile/${Date.now()}-${profileImage.name}`, profileImage);

      if (error) {
        console.error('Error uploading profile image:', error);
      } else {
        profileImageUrl = data.path;
      }
    }

    for (const image of portfolioImages) {
      const { data, error } = await supabase.storage
        .from('artist-images')
        .upload(`portfolio/${Date.now()}-${image.name}`, image);

      if (error) {
        console.error('Error uploading portfolio image:', error);
      } else {
        portfolioImageUrls.push(data.path);
      }
    }

    onSubmit({
      name,
      style,
      bio,
      instagram,
      profile_image: profileImageUrl,
      portfolio: portfolioImageUrls,
    });

    // Reset form
    setName('');
    setStyle('');
    setBio('');
    setInstagram('');
    setProfileImage(null);
    setPortfolioImages([]);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="style" className="block text-sm font-medium text-gray-700">
          Style
        </label>
        <input
          type="text"
          id="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          Bio
        </label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows={3}
        ></textarea>
      </div>
      <div>
        <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
          Instagram
        </label>
        <input
          type="url"
          id="instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">
          Profile Image
        </label>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={(e) => setProfileImage(e.target.files?.[0] || null)}
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="portfolioImages" className="block text-sm font-medium text-gray-700">
          Portfolio Images
        </label>
        <input
          type="file"
          id="portfolioImages"
          accept="image/*"
          multiple
          onChange={(e) => setPortfolioImages(Array.from(e.target.files || []))}
          className="mt-1 block w-full"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {initialData ? 'Update Artist' : 'Add Artist'}
      </button>
    </form>
  );
}
