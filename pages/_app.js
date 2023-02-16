import Head from "next/head";
import "font-awesome/css/font-awesome.min.css";
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// import "../styles/globals.css";
// import "../styles/Home.css";
// import "../styles/About.css";
// import "../styles/Product.css";
// import "../styles/Contact.css";
// import "../styles/Neuro.css";
// import "../styles/Hardgel.css";
import { GlobalStyle } from "../styles/globals";
function MyApp({ Component, pageProps }) {

 
  return (
    <>
       <GlobalStyle/>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
          crossorigin="anonymous"
        ></script>

        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );

  
}

export default MyApp;
