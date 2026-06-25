'use client';

import { useEffect, useState } from 'react';
import { getProfile } from '@/lib/spotify/getProfile';

export default function SpotifyProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  if (!profile) {
    return (
      <div className="text-sm text-gray-400 mt-4">
        Loading Spotify profile...
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 bg-neutral-900 rounded-lg">
      <h2 className="text-lg font-semibold">Spotify Account</h2>
      <p>{profile.display_name}</p>
      <p className="text-sm text-gray-400">{profile.email}</p>
    </div>
  );
}