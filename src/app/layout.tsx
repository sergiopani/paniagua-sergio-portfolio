import { Layout } from "../../components/layouts";
import 'styles/globals.scss';

export const metadata = {
  title: 'Sergio Paniagua',
  description: 'Portfolio sergio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="es">
      {/* <Layout title={metadata.title} description={metadata.description}> */}
      <body>{children}</body>
      {/* </Layout> */}
    </html>
  );
}
