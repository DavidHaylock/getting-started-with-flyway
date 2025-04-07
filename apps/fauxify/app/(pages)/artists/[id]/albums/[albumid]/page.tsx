'use client';

import { api } from '@/app/api';
import { Album } from '@fauxify/api-client';
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Page() {
  const router = useParams()
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    try {
     api.albumsIdGet({ id: router.albumid as string ?? '' }).then((response) => {
        setAlbums(response?.data?.result ?? []);
      });
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  }, []);
  return (
    <div className="flex flex-col p-4 h-screen">  
    <div>
      <h1>Songs</h1>
      <div>
        <table className="w-full text-left p-2 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {albums?.songs?.map?.((song) => (
              <tr key={song.id}>
                <td>{song.title}</td>
                <td>{Math.floor(song.durationSeconds / 60)}:{('0' + (song.durationSeconds % 60)).slice(-2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}