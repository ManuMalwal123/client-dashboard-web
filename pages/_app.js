// Font Asesome
import "font-awesome/css/font-awesome.min.css";

// Styles
import "@styles/scss/styles.scss";
import { GlobalStyle } from "@styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
