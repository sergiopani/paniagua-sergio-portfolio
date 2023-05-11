'use client';

import Link from "next/link";
import { FC } from "react";
import { usePathname } from 'next/navigation';
import style from 'styles/header/_header.module.scss';
import { Link as LinkType } from '../../../types';
interface Props {
    user: string;
    description: string;
    navLinks: LinkType[];
}

export const Header: FC<Props> = ({ user, description, navLinks }) => {
    const pathname = usePathname();
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <Link href="/" className={style.header__title}>{user + '();'}</Link>
                <ul className={style.header__list}>

                    {navLinks.map((link) => {

                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href} className={style.header__item}>
                                <Link
                                    className={`${style.header__link} ${isActive ? style.active : ''}`}
                                    href={link.href}
                                    key={link.name}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}

                </ul>

            </div>

        </header >
    );
};
