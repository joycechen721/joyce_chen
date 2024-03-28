import React, { useState, useEffect } from "react";
import { Track } from "@/utils/types";
import { getCurrentTrack } from "@/utils/spotifyParse";

export const SpotifyTrack = () => {
    const [track, setTrack] = useState<Track | null>(null);

    const getTrack = async () => {
        const data: Track | undefined = await getCurrentTrack();
        setTrack(data);
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            getTrack();
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        track === null ? <div></div> :
            <div className="track">
                <a href={track.url} target="_blank">
                    <img src={track.albumCover.url} />
                    <div className="track-content">
                        <p>🎧 {track.name} 🎧</p>
                        <p className="animate-text">{track.artistNames[0]}</p>
                    </div>
                </a>
            </div>
    );
};

export default SpotifyTrack;
