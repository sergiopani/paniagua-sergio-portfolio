'use client';

import { FC, useEffect, useState } from 'react';
import style from 'styles/main/_main.module.scss';
interface Props {
    children: React.ReactNode;
}


export const Main: FC<Props> = ({ children }) => {

    const [animar, setAnimar] = useState(false);

    useEffect(() => {
        setAnimar(true);
    }, []);
    return (
        <main role="main" className={`${style.main__container}  ${animar ? 'animar' : ''}`}>
            {children}
        </main>
    );
};
