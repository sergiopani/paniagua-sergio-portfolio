import { FC } from 'react';
import style from 'styles/footer/_footer.module.scss';
import { FooterItem } from '../../../types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    footerItems: FooterItem[];
}
export const Footer: FC<Props> = ({ footerItems }) => {
    return (
        <footer className={style.footer__container} >

            <div className={style.footer__container__items}>
                {
                    footerItems.map(({ id, nombre, url, icono }) => (

                        <div key={id} className={style.footer__container__item}>
                            {
                                <Image
                                    src={icono}
                                    alt={nombre}
                                    width={50}
                                    height={50}
                                    className={style.footer__item__icon} />}

                            <Link href={url}>
                                {nombre}
                            </Link>

                        </div>

                    ))
                }
            </div>

        </footer>
    );
};
