"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SpotifyTrack from "@/components/SpotifyTrack";
import { Playlist } from "@/utils/types";
import { getPlaylists } from "@/utils/spotifyParse";

export default function Page() {
    const router = useRouter();
    const [playlists, setPlaylists] = useState<Array<Playlist> | []>([]);

    const itemsList: Array<string> = [
        "spring 24",
        "fitness",
        "food",
        "music",
        "places",
        "random",
        "vents",
    ];

    const getImages = async () => {
        const data: Array<Playlist> | undefined = await getPlaylists();
        if (data) {
            setPlaylists(data);
        }
    }

    useEffect(() => {
        getImages();
    }, [])

    return <>
        <div className="blog-main">
            <h1>music</h1>
            <div className="blog-body">
                <h2>🎧🎤🎵🎹🎙️🎼📻🎺🎶🎷🪕</h2>
                <p><em>more like a spotify dump... ahem good music should be shared.</em></p>
                <h3>playlist gallery!</h3>
                <div className="playlist-gallery">
                    {playlists && playlists.map((playlist) => (
                        <div key={playlist.name} className="playlist-container">
                            <img src={playlist.image.url} />
                            <p>{playlist.name}</p>
                            <p>by: {playlist.owner}</p>
                        </div>
                    ))}
                </div>
                {/* <SpotifyTrack /> */}
            </div>
        </div>
        <div className="blog-rightbar">
            {itemsList.map((item) => (
                <div
                    key={item}
                    className={`cloud ${item === 'music' ? 'highlightCategory' : ''}`}
                    onClick={() => {
                        router.push(`/thoughts/${item}`);
                    }}
                >
                    <span>{item}</span>
                </div>
            ))}
        </div>
        <div className="blog-sidebar">
            <h3>table of contents</h3>
            <ul>
            </ul >
        </div >
    </>
}