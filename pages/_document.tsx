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
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="scrool-none scroolbar">
          <Main />
          <div id="modal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
