'use client';

import React, { useState, useRef, FC } from 'react';
import style from 'styles/video-transcription/_video_transcription.module.scss';
interface Props {
    videoSrc: string,
    transcript: string,

}

const VideoPlayer: FC<Props> = ({ videoSrc, transcript }) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<any>(null);

    const togglePlay = () => {
        setPlaying(!playing);
    };

    const handleSubtitleChange = (event: any) => {


        if (event.target.value == -1) {
            [...videoRef.current.textTracks].forEach((track: any) => {
                track.mode = 'hidden';
            });
            return;
        }
        if (videoRef.current) {

            const track = videoRef.current.textTracks[event.target.value];
            track.mode = 'showing';
            const siNoEsTrack = (track: any) => track.label === videoRef.current.textTracks[event.target.value].label;


            [...videoRef.current.textTracks].forEach((track: any) => {
                if (!siNoEsTrack(track)) {
                    track.mode = 'hidden';
                }
            });
        }
    };

    return (
        <>
            <h1 className={style.titulo__defecto}>Como funciona next?</h1>
            <div className={style.video__container}>
                <video
                    controls
                    ref={videoRef}
                    id="video1"
                    preload="auto"
                    className={style.video__single}
                    poster="/icons/nextjs.svg"
                    autoPlay
                    data-able-player
                    data-skin="2023"
                >
                    <source type="video/mp4" src={videoSrc} />
                    <source type="video/webm" src={videoSrc} />
                    <track kind="captions" src="/captions/caption_en.vtt" srcLang="en" label="English captions" />
                    <track kind="captions" src="/captions/caption_fr.vtt" srcLang="fr" label="French captions" />
                    <track kind="captions" src="/captions/caption_es.vtt" srcLang="es" label="Captions en Español" />
                </video>
            </div>
            <div className="subtitle-controls" style={{ marginTop: '2rem' }}>
                <label htmlFor="subtitle-select" className={style.titulo__defecto} style={{ marginBottom: '5rem' }}>Subtitles:</label>
                <select onChange={handleSubtitleChange} className={style.language__selector__single}>
                    <option value="-1">Off</option>

                    <option value="0">English</option>
                    <option value="1">French</option>
                    <option value="2">Español</option>

                </select>
            </div>
        </>
    );
};
export default VideoPlayer;
