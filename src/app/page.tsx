
import { FC } from "react";
import { Header, Main, MainCarrousel, MainAboutMe, MainExperience, MainTopProjects, WorkProgress, Footer } from "../../components/ui";
import { aboutData, usuarioData, experienciaData, proyectosData, dataObjetivos, footerItems } from "../../constants";
import { ContactForm } from "../../components/ui/forms/ContactForm";



const Home: FC = () => {
  const { nombre, descripcion, subDescripcion, imagen } = usuarioData;

  return (
    <>

      <Main>
        <MainCarrousel
          nombre={nombre}
          descripcion={descripcion}
          subdescripcion={subDescripcion}
          imageUrl={imagen}
        />
        <MainAboutMe sobremi={aboutData.sobremi} />
        <WorkProgress objetivos={dataObjetivos} />
        <MainExperience experiencia_arr={experienciaData} />
        {/* <MainTopProjects proyectos={proyectosData} /> */}
      </Main>

    </>
  );
};


export default Home;

