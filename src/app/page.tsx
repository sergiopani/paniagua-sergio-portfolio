
import { FC } from "react";
import { Header, Main, MainCarrousel, MainAboutMe, MainExperience } from "../../components/ui";
import { aboutData, usuarioData, experienciaData } from "../../constants";


const Home: FC = () => {
  const { nombre, descripcion, subDescripcion, imagen } = usuarioData;

  return (
    <>
      <Header user={nombre} description={descripcion} />
      <Main>
        <MainCarrousel
          nombre={nombre}
          descripcion={descripcion}
          subdescripcion={
            subDescripcion
          }
          imageUrl={imagen}
        />
        <MainAboutMe sobremi={aboutData.sobremi} />
        <MainExperience experiencia_arr={experienciaData} />
      </Main>
    </>
  );
};


export default Home;

