import Image from 'next/image';
import { FC } from 'react';
import style from 'styles/_main_carroulsel.module.scss';
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
                    <Image
                        src={imageUrl}
                        alt={nombre}
                        width={176}
                        height={176}
                        className={style.main__carrousel__image} />

                    <h1 className={style.main_carrousel__title}>{nombre}</h1>
                    <p className={style.main_carrousel__description}>
                        {descripcion}
                    </p>

                    <p className={style.main_carrousel__subdescripcion}>
                        {subdescripcion}
                    </p>


                    <div className={style.main_carousel__iconos}>
                        <p>Tecnologias favoritas:</p>
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
