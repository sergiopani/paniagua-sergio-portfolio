import { FC } from "react";
import { Header, Main, Footer, MainTopProjects } from "../../../components/ui";
import { footerItems, proyectosData, usuarioData } from "../../../constants";
import { ContactForm } from "../../../components/ui/forms/ContactForm";

const AboutPage: FC = () => {
    const { nombre, descripcion, } = usuarioData;
    return (
        <>

            <Main>
                <MainTopProjects proyectos={proyectosData} />
                <ContactForm />
            </Main>

        </>
    );
};


export default AboutPage;