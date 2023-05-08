import Link from "next/link";
import { FC } from "react";

import style from 'styles/_header.module.scss';
interface Props {
    user: string;
    description: string;
}

export const Header: FC<Props> = ({ user, description }) => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <h1 className={style.header__title}>{'<' + user + '/>'}</h1>
                <ul className={style.header__list}>
                    <li className={style.header__item}>

                        <Link href="/about" className={style.header__link} >
                            About
                        </Link>
                    </li>
                    <li className={style.header__item}>
                        <Link href="/projects" className={style.header__link} >
                            Projects
                        </Link>
                    </li>
                    <li className={style.header__item}>
                        <Link href="/contact" className={style.header__link} >
                            Contact
                        </Link>
                    </li>
                </ul>

            </div>

        </header>
    );
};
