import { FC } from 'react';
import style from 'styles/projects/_workProgress.module.scss';
import { Objetivo } from '../../../types';
import Image from 'next/image';
import global from 'styles/_global_classes.module.scss';
interface Props {
    objetivos: Objetivo[];
}
export const WorkProgress: FC<Props> = ({ objetivos }) => {
    return (
        <>
            <h1 className={global.titulo__defecto} style={{ marginBottom: '3rem' }}>Habilidades</h1>
            <div className={style.work__objetivos}>
                {
                    objetivos.map(({ id, nombre, descripcion }) => (
                        <div key={id} className={style.work__objetivo}>
                            <div className={global.titulo__defecto} style={{ marginBottom: '1rem' }}>
                                {nombre}
                            </div>
                            <div className={global.paragrafo__defecto}>
                                {descripcion}
                            </div>


                        </div>
                    ))
                }
            </div>
        </>
    );
};
