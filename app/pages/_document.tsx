import { Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from "blitz"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Html lang="en">
        <DocumentHead >

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"  />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
        </DocumentHead>
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
