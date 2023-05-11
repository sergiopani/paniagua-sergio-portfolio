'use client';

import Link from "next/link";
import { FC } from "react";
import { usePathname } from 'next/navigation';
import { NavLink } from "react-router-dom";
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
                    {/* <li className={style.header__item}>

                        <Link href="/"
                            className={style.header__link}
                            style={{ transitionDelay: '150ms' }} >
                            Home
                        </Link>
                    </li>
                    <li className={style.header__item}>
                        <Link href="/projects"
                            className={style.header__link}
                            style={{ transitionDelay: '200ms' }}>
                            Projects
                        </Link>
                    </li>
                    <li className={style.header__item}>

                        <Link href="/about" className={style.header__link} style={{ transitionDelay: '175ms' }}>
                            About
                        </Link>
                    </li>
                    <li className={style.header__item}>
                        <Link href="/contact" className={style.header__link} style={{ transitionDelay: '225ms' }}>
                            Contact
                        </Link>
                    </li> */}
                </ul>

            </div>

        </header >
    );
};
