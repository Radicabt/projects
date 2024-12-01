import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import TopNavbar from "../HomePageComponents/TopNavbar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import Hero from "../components/IndustriesPage/Hero";
import IndustryCards from "../components/IndustriesPage/IndustriesCards";
import ContactSection from "../components/IndustriesPage/ContactSection";
const Industries = () => {
  return (
    <>
      <Head>
        <title>Industries</title>
        <meta
          name="description"
          content="Industries we protect with our cybersecurity solutions."
        />
      </Head>
      <TopNavbar />
      <Header />
      <main>
        <Hero />
        <IndustryCards />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common", "industries"])),
  },
});

export default Industries;
