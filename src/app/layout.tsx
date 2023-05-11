import { Layout } from "../../components/layouts";
import 'styles/globals.scss';
import { Footer, Header } from "../../components/ui";
import { aboutData, usuarioData, experienciaData, proyectosData, dataObjetivos, footerItems, links } from "../../constants";
export const metadata = {
  title: 'Sergio Paniagua',
  description: 'Portfolio sergio',

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { nombre, descripcion, subDescripcion, imagen } = usuarioData;
  return (

    <html lang="es">

      <link rel="icon" href="/icons/nextjs.svg" />
      {/* <Layout title={metadata.title} description={metadata.description}> */}
      <body>
        <Header user={nombre} description={descripcion} navLinks={links} />
        {children}
        <Footer footerItems={footerItems} />
      </body>
      {/* </Layout> */}
    </html>
  );
}
