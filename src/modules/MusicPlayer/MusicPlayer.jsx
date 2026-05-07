import React, {useEffect, useRef, useState} from 'react';
import * as mm from 'music-metadata-browser';
import './MusicPlayer.css';

const MUSIC_PATH = `${import.meta.env.BASE_URL}music/`;

const MusicPlayer = ({fileList = []}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songTitles, setSongTitles] = useState({});
    const [metadata, setMetadata] = useState({title: '', artist: '', album: '', cover: null});
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    const [volume, setVolume] = useState(1); // 1 es el volumen máximo (100%)

    const formatTime = (time) => {
        if (isNaN(time)) return "00:00";
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    useEffect(() => {
        if (fileList.length === 0) return;
        const scanAll = async () => {
            const newTitles = {...songTitles};
            for (const file of fileList) {
                try {
                    const res = await fetch(`${MUSIC_PATH}${file}`);
                    const tags = await mm.parseBlob(await res.blob());
                    newTitles[file] = tags.common.title || file.replace(/\.[^/.]+$/, "");
                } catch {
                    newTitles[file] = file.replace(/\.[^/.]+$/, "");
                }
            }
            setSongTitles(newTitles);
        };
        scanAll();
    }, [fileList]);

    useEffect(() => {
        if (fileList.length === 0) return;
        const loadMetadata = async () => {
            try {
                const file = fileList[currentIndex];
                const res = await fetch(`${MUSIC_PATH}${file}`);
                const tags = await mm.parseBlob(await res.blob());
                const {title, artist, album, picture} = tags.common;

                let coverUrl = "https://placehold.co/300x300/222/ddd?text=CD";
                if (picture?.length > 0) {
                    coverUrl = URL.createObjectURL(new Blob([picture[0].data], {type: picture[0].format}));
                }

                setMetadata({
                    title: title || file.replace(/\.[^/.]+$/, ""),
                    artist: artist || "Artista Desconocido",
                    album: album || "Álbum Desconocido",
                    cover: coverUrl
                });
            } catch {
                setMetadata({title: fileList[currentIndex], artist: "Desconocido", album: "", cover: null});
            }
        };
        loadMetadata();
    }, [currentIndex, fileList]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // 1. Pausamos y reseteamos
        audio.pause();

        // 2. Intentamos cargar la nueva canción
        audio.load();

        // 3. Solo reproducimos si isPlaying es true
        if (isPlaying) {
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Error de reproducción:", error);
                    // Si hay error, forzamos el estado a pausa para que el botón sea coherente
                    setIsPlaying(false);
                });
            }
        }
    }, [currentIndex]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="player-container">
            <div className="visual-wrapper">
                {/* El CD ahora está centrado por defecto y se mueve a la derecha */}
                <div className={`cd-svg-container ${isPlaying ? 'is-playing' : ''}`}>
                    <svg width="200" height="200" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="95" fill="#121212" stroke="#333" strokeWidth="1"/>
                        {/* Segmentos de detalle en el círculo para notar el giro */}
                        <path d="M 150 100 A 50 50 0 0 1 100 150" fill="none" stroke="white" strokeWidth="2"
                              opacity="0.15" strokeLinecap="round"/>
                        <path d="M 50 100 A 50 50 0 0 1 100 50" fill="none" stroke="white" strokeWidth="2"
                              opacity="0.15" strokeLinecap="round"/>
                        <circle cx="100" cy="100" r="85" fill="none" stroke="#222" strokeWidth="0.5"/>
                        <circle cx="100" cy="100" r="35" fill="#2563eb"/>
                        <circle cx="100" cy="100" r="8" fill="#121212"/>
                    </svg>
                </div>
                {/* La Carátula centrada por defecto y se mueve a la izquierda */}
                <div className={`album-cover-wrapper ${isPlaying ? 'is-playing' : ''}`}>
                    <img src={metadata.cover} alt="Cover"/>
                </div>
            </div>

            <div className="metadata-info">
                <h2 className="metadata-title-text">{metadata.title}</h2>
                <p className="artist">{metadata.artist}</p>
                <p className="album">{metadata.album}</p>
            </div>

            <div className="progress-container">
                <span className="time-text">{formatTime(currentTime)}</span>
                <input
                    type="range"
                    className="progress-bar"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={(e) => {
                        audioRef.current.currentTime = e.target.value;
                        setCurrentTime(e.target.value);
                    }}
                />
                <span className="time-text">{formatTime(duration)}</span>
            </div>

            <div className="controls">
                <button className="control-btn"
                        onClick={() => setCurrentIndex(p => (p - 1 + fileList.length) % fileList.length)}>
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.192.105 1.192.702v7.372c0 .597-.672 1.004-1.192.702L5 8.752V12a.5.5 0 0 1-1 0V4z"/>
                    </svg>
                </button>
                <button className="play-pause-btn" onClick={togglePlay}>
                    {isPlaying ? (
                        <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                        </svg>
                    ) : (
                        <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                    )}
                </button>
                <button className="control-btn" onClick={() => setCurrentIndex(p => (p + 1) % fileList.length)}>
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.717 4 4.314v7.372c0 .597.713 1.004 1.233.702L11.5 8.752V12a.5.5 0 0 0 1 0V4z"/>
                    </svg>
                </button>
            </div>

            <div className="volume-container">
    <span className="volume-icon">
        {volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
    </span>
                <input
                    type="range"
                    className="volume-slider"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                />
            </div>

            <div className="playlist-container">
                {fileList.map((file, idx) => (
                    <div key={idx} className={`playlist-item ${idx === currentIndex ? 'active' : ''}`} onClick={() => {
                        setCurrentIndex(idx);
                        setIsPlaying(true);
                    }}>
                        <span className="song-number">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="song-list-title">{songTitles[file] || file.replace(/\.[^/.]+$/, "")}</span>
                    </div>
                ))}
            </div>

            <audio
                ref={audioRef}
                src={`${MUSIC_PATH}${fileList[currentIndex]}`}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                onEnded={() => setCurrentIndex(p => (p + 1) % fileList.length)}/>
        </div>
    );
};

export default MusicPlayer;