import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  // Cosas que podemos hacer desde el server
  // static async getInitialProps(ctx) {
  //   // todos los cambios aplican para todas las paginas
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/css/tailwind-build.css" />
        </Head>
        <body className="scrool-none scroolbar bg-scroolbar-white text-gray-800 dark:text-white bg-white dark:bg-base-dark">
          <Main />
          <div id="modal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
