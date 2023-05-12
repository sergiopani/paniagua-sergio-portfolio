import { FC } from 'react';

import Head from 'next/head';


interface Props {
    title: string;
    children: React.ReactNode;
    description: string;
}

export const Layout: FC<Props> = ({ children, title, description }) => {

    return (
        <>
            <Head>

                <title>{title}</title>
                <meta name="description" content="Portfolio de sergio" />
                <meta name="keywords" content="Portfolio, sergio" />
                <meta name="author" content="sergio" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" />
            </Head>
            <main role="main">
                {children}
            </main>
        </>
    );
};
