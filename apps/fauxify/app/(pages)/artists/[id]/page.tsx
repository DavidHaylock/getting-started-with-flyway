'use client';

import { api } from "@/app/api";
import { Artist } from "@fauxify/api-client";
import Link from "next/link";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Page() {
  const router = useParams()
  const [albums, setAlbums] = useState<Artist | null>(null);

  useEffect(() => {
    try {
      api.artistsIdGet({ id: router.id as string ?? '' }).then((response) => {
        setAlbums(response?.data?.result ?? null);
      });
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  }, []);
  return (
    <div className="flex flex-col p-4 h-screen">  
    <div>
      <h1>Albums</h1>
      <div>
      <table className="w-full text-left p-2 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th>Album Name</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {albums?.albums?.map?.((album) => (
              <tr key={album.id}>
                <td>
                  <Link href={`/artists/${router.id}/albums/${album.id}`}>{album.title}</Link>
                  </td>
                <td>{album.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}