import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { MainLayout } from "@/components/MainLayout";
import { ContentLayout } from "@/components/ContentLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Header />
      <MainLayout>
        <ContentLayout>
          <Component {...pageProps} />
        </ContentLayout>
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
