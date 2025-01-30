'use client';

import { supabase } from '@/lib/supabase';
import { useState } from 'react';

export function StudioPortfolioForm({ onUpload }: { onUpload: (filePath: string) => void }) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      setUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const filePath = `studio/${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage.from('artist-images').upload(filePath, file);

      if (!error && data) {
        onUpload(data.path);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-medium mb-2">Upload Studio Image</h3>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
        />
        {uploading && <span>Uploading...</span>}
      </label>
    </div>
  );
}
