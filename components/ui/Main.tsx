import { FC } from 'react';
import style from 'styles/_main.module.scss';
interface Props {
    children: React.ReactNode;
}


export const Main: FC<Props> = ({ children }) => {
    return (
        <main className={style.main__container}>
            {children}
        </main>
    );
};
