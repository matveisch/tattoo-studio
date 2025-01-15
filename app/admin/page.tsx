'use client';

import { ArtistForm } from '@/components/ArtistForm';
import { ArtistList } from '@/components/ArtistList';
import { supabase } from '@/lib/supabase';
import { Tables } from '@/utils/supabase/supabase';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [artists, setArtists] = useState<Tables<'artists'>[]>([]);
  const [editingArtist, setEditingArtist] = useState<Tables<'artists'> | null>(null);

  useEffect(() => {
    fetchArtists();
  }, []);

  async function fetchArtists() {
    const { data, error } = await supabase.from('artists').select('*').order('name');

    console.log(data);

    if (error) {
      console.error('Error fetching artists:', error);
    } else {
      setArtists(data || []);
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
    const { error } = await supabase.from('artists').delete().eq('id', id);

    if (error) {
      console.error('Error deleting artist:', error);
    } else {
      fetchArtists();
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-12">Tattoo Artist Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <ArtistList artists={artists} onEdit={setEditingArtist} onDelete={handleDeleteArtist} />
        </div>
      </div>
    </div>
  );
}
