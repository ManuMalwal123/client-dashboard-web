// Font Asesome
import "font-awesome/css/font-awesome.min.css";

// Styles
import "@styles/scss/styles.scss";
import { GlobalStyle } from "@styles/globals";

function MyApp({ Component, pageProps }) {
  const DashboardLayout = Component.DashboardLayout || EmptyLayout;

  return (
    <>
      <GlobalStyle />
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
