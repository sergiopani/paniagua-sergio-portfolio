import { FC } from "react";
import style from 'styles/main/_main_about.module.scss';
import global from 'styles/_global_classes.module.scss';
interface Props {
    sobremi: string;
}
export const MainAboutMe: FC<Props> = ({ sobremi }) => {
    return (
        <section >
            <div className={style.main_about}>
                <div className={style.main_about__container}>
                    <h1 className={global.titulo__defecto}>About me</h1>
                    <p className={global.paragrafo__defecto}>
                        {sobremi}
                    </p>
                </div>
            </div>
        </section>
    );
};


