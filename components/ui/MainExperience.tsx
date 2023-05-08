import { FC } from 'react';
import style from 'styles/_main_experiencia.module.scss';
import { Experiencia } from '../../types';

interface Props {
    experiencia_arr: Experiencia[];
}

export const MainExperience: FC<Props> = ({ experiencia_arr }) => {
    return (
        <section>
            <div className={style.main_experience}>
                <div className={style.main_experience__container}>
                    <span className={style.main_experience__icon}>

                    </span>
                    <h1 className={style.main_experience__title}>Experiencia</h1>
                    <p className={style.main_experience__description}>
                        {experiencia_arr.map(({ id, nombre, descripcion }) => (
                            <div key={id}>
                                <h2>{nombre}</h2>
                                <p>
                                    {descripcion}
                                </p>
                            </div>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
};
