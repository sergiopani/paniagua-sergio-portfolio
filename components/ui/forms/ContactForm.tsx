import { FC } from 'react';
import style from 'styles/forms/_form.module.scss';
import global from 'styles/_global_classes.module.scss';

export const ContactForm: FC = () => {
    return (
        <form role="input" className={style.contact__form}>
            <fieldset>
                {/* <legend className={global.titulo__defecto}>Formulario de contacto</legend> */}
                <div className={style.fieldset}>
                    <label className={global.super__title__secundario} htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre"
                        className={style.__input} placeholder='Escribe tu nombre' />
                </div>
                <div className={style.fieldset}>
                    <label className={global.super__title__secundario} htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        className={style.__input} placeholder='Escribe tu correo' />
                </div>
                <div className={style.fieldset}>
                    <label className={global.super__title__secundario} htmlFor="mensaje">Mensaje</label>
                    <textarea className={style.__textArea} name="mensaje" id="mensaje" cols={30} rows={10}
                        placeholder='Escribe tu texto'></textarea>
                </div>
                <div className={style.fieldset}>
                    <button className={style.__submit} type="submit">Enviar</button>
                </div>
            </fieldset>

        </form>
    );
};
