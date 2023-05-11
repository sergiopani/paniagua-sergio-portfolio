'use client';

import { FC, useEffect, useState } from "react";
import { Loading } from "../ui";
import Image from "next/image";
import style from 'styles/lazy-load/_lazy-load.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const LazyLoadImages: FC = () => {
    const [images, setImages] = useState([]);

    const fetchImages = async () => {
        //Utilizo una api para cojer imagenes random!!! lo que hay en el param cliend_id es mi key de la api asi que no usar!!
        const res = await fetch('https://api.unsplash.com/photos?page=1&client_id=LbjJhlUUnt9DKn2DcPsNA6R3cfAFlEixOQAC3-tiUSw');
        let data = await res.json();
        //duplicar la respuesta para que se vea el lazy load
        data = [...data, ...data];

        setImages(data);
    };

    useEffect(() => {
        fetchImages();
    }, []);


    return (
        <>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Comprueba el lazy load en Dev Tools - Network</h1>
            {
                images.length === 0 && <Loading />
            }
            <div className={style.imagenes}>
                {
                    images.map((image: any) => {
                        return (
                            <div key={image.id + Math.random()} className={style.imagen}>
                                <LazyLoadImage
                                    effect="blur"
                                    src={image.urls.regular}
                                    alt={image.alt_description}
                                    width={300}
                                    height={300}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};
