import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

interface Props {}

class Document extends NextDocument<Props> {
  render(): any {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
