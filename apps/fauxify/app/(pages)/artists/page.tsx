'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { Artist } from '@fauxify/api-client';
import { api } from "@/app/api";

export default function Page() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    try {
      api.artistsGet().then((response) => {
        setArtists(response?.data?.results ?? []);
      });
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  }, []);

  return (
    <div className="flex flex-col p-4 h-screen">  
    <div>
      <h1>Artists</h1>
      <table className="w-full text-left p-2 border-collapse border border-gray-200">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody className="p-2">
          {artists?.map?.((artist) => (
            <tr key={artist.id}>
              <td>
                <Link href={`/artists/${artist.id}`}>{artist.name}</Link>
                </td>
              <td>{artist.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    </div>
  )
}