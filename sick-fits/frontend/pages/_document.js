import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocumnet extends Document {
  render() {
    return (
      <Html lang="en-gb">
        {/* <head> </head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
