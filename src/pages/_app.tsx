import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "@/components/Header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="main">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
