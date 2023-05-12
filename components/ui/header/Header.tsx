'use client';

import Link from "next/link";
import { FC, useRef } from "react";
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

    const movileHeader = useRef<HTMLHeadElement>(null);

    const handleClick = () => {
        movileHeader.current?.classList.toggle(style.hidden);
    };

    return (
        <>
            <header role="banner" className={style.header}>
                <div className={style.header__container}>
                    <Link href="/" className={style.header__title}>{user + '();'}</Link>
                    <button className={style.movile__button} onClick={handleClick}>


                    </button>
                    <nav role="navigation">
                        <ul className={style.header__list}>

                            {navLinks.map((link) => {

                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.href} className={style.header__item}>
                                        <Link
                                            className={`${style.header__link} ${isActive ? style.active : ''}`}
                                            href={link.href}
                                            key={link.name}
                                            prefetch={false}

                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}

                        </ul>
                    </nav>
                </div>

            </header >

            <header className={`${style.hidden} ${style.header__movile}`} ref={movileHeader}>
                <div className={style.header__container}>

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


            </header>
        </>
    );
};
