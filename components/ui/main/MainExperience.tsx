import { FC } from 'react';
import style from 'styles/main/_main_experiencia.module.scss';
import { Experiencia } from '../../../types';

import global from 'styles/_global_classes.module.scss';


interface Props {
    experiencia_arr: Experiencia[];
}

export const MainExperience: FC<Props> = ({ experiencia_arr }) => {
    return (
        <>
            <h1 className={global.titulo__defecto} style={{ marginBottom: '3rem', textAlign: 'center' }}>Experiencia</h1>
            <section>
                <ul lang="en" className={style.ul}>
                    {
                        experiencia_arr.map(({ id, nombre, descripcion }, index) => (
                            <li key={id} className={style.experiencia__caja}>
                                <div className={style.date}>2023</div>
                                <div className={style.title}>{nombre}</div>
                                <div className={style.descr}>{descripcion}</div>
                            </li>
                        ))
                    }

                </ul>
            </section>
        </>
    );
};
