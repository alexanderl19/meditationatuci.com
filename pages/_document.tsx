import { Html, Head, Main, NextScript } from "next/document";
import { getCssText, globalCss } from "stitches.config";

const globalStyles = globalCss({
  body: { margin: 0 },
});

export default function Document() {
  globalStyles();
  return (
    <Html>
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
