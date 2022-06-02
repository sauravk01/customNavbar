import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import Nav from "../components/customNavbar/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />

      <Nav />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
