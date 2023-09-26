import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*favicon*/}
          {/*Webfont*/}
          {/*Estilos externos */}
          {/*Scripts externos */}
          <link rel="icon" href="/images/avo.png" />
          <title>Avocado</title>{" "}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
