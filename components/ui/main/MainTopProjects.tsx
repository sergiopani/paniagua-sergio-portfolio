'use client';


import { FC, useState } from 'react';
import style from 'styles/projects/_topProjects.module.scss';
import { Proyecto } from '../../../types';
import Image from 'next/image';
import global from 'styles/_global_classes.module.scss';
interface Props {
    proyectos: Proyecto[];
}

export const MainTopProjects: FC<Props> = ({ proyectos }) => {

    const [clicked, setClicked] = useState(false);
    return (
        <>
            <h1 className={global.super__title}>Sobre mi</h1>
            <p className={global.paragrafo__defecto}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime iure minus quo quae eligendi deserunt, enim corporis ipsam quidem neque nisi nam possimus harum necessitatibus pariatur voluptatum doloremque. Excepturi, assumenda!
            </p>
            <section className={style.slider}>
                <input type="radio" name="slider" className={style.s1} id="s1" />
                <input type="radio" name="slider" className={style.s2} id="s2" />
                <input type="radio" name="slider" onClick={() => setClicked(true)} className={style.s3} id="s3" defaultChecked />
                <input type="radio" name="slider" className={style.s4} id="s4" />
                <input type="radio" name="slider" className={style.s5} id="s5" />
                <label htmlFor="s1" className={style.slide1}>
                    Contacta!

                </label>
                <label htmlFor="s2" className={style.slide2}>
                    Contacta!

                </label>
                <label htmlFor="s3" className={style.slide3}>
                    Contacta!

                </label>
                <label htmlFor="s4" className={style.slide4}>
                    Contacta!

                </label>
                <label htmlFor="s5" className={style.slide5}>
                    Clica Aqui!

                </label>
            </section>

            {/* {
                !clicked && <p>Clica en el proyecto para ver mas!</p>
            } */}
        </>
    );
}

