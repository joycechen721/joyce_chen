import React, { useEffect } from "react";
import Track from "@/utils/types";
import Link from "next/link";

interface Props {
    track: Track;
}

const SpotifyTrack: React.FC<Props> = ({ track }) => {
    useEffect(() => {
        console.log(track.name);
    }, [track]);

    return (
        <div className="track">
            <Link href={track.url}>
                <img src={track.albumCover.url} />
                <div className="track-content">
                    <p>🎧 {track.name} 🎧</p>
                    <p className="animate-text">{track.artistNames[0]}</p>
                </div>
            </Link>
        </div>
    );
};

export default SpotifyTrack;
