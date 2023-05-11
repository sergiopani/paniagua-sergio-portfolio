'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import style from 'styles/main/_main_carroulsel.module.scss';
import global from 'styles/_global_classes.module.scss';

interface Props {
    nombre: string;
    descripcion: string;
    imageUrl: string;
    subdescripcion?: string;
}

export const MainCarrousel: FC<Props> = ({ nombre, imageUrl, descripcion, subdescripcion }) => {



    return (
        <section>
            <div className={style.main_carrousel}>
                <div className={style.main_carrousel__container}>
                    <div className={style.main__carrousel__personal__info}>
                        <Image
                            src={imageUrl}
                            alt={nombre}
                            width={176}
                            height={176}
                            className={style.main__carrousel__image} />
                    </div>

                    <div className={style.main_carousel__iconos}>

                        <h1 className={global.super__title}>{nombre + ' ' + descripcion}</h1>
                        <p className={global.super__title__secundario}>
                            {subdescripcion}

                        </p>

                        <p className={global.paragrafo__defecto}>
                            I enjoy programming and I try to learn new things.
                        </p>

                        <p className={global.paragrafo__defecto}>Current favorite tech stack/tools:</p>
                        <div className={style.main_carousel__iconos__container}>
                            <Image

                                src="/icons/nextjs.svg"
                                alt="nextjs"
                                width={50}
                                height={50}
                                className={style.main_carousel__iconos__image} />

                            <Image

                                src="/icons/reactjs.svg"
                                alt="reactjs"
                                width={50}
                                height={50}
                                className={style.main_carousel__iconos__image} />

                            <Image

                                src="/icons/vuejs.svg"
                                alt="vuejs"
                                width={50}
                                height={50}
                                className={style.main_carousel__iconos__image} />

                            <Image

                                src="/icons/python.svg"
                                alt="python"
                                width={50}
                                height={50}
                                className={style.main_carousel__iconos__image} />
                            <Image

                                src="/icons/php.svg"
                                alt="php"
                                width={50}
                                height={50}
                                className={style.main_carousel__iconos__image} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};


