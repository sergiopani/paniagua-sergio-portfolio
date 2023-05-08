import { FC } from "react";
import style from 'styles/_main_about.module.scss';

interface Props {
    sobremi: string;
}
export const MainAboutMe: FC<Props> = ({ sobremi }) => {
    return (
        <section >
            <div className={style.main_about}>
                <div className={style.main_about__container}>
                    <h1 className={style.main_about__title}>Sobre mi</h1>
                    <p className={style.main_about__description}>
                        {sobremi}
                    </p>
                </div>
            </div>
        </section>
    );
};


