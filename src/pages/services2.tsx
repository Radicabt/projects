import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import TopNavbar from "../HomePageComponents/TopNavbar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import Hero from "../components/ServicesPage2/Hero";
import KeyFeaturesSection from "../components/ServicesPage2/KeyFeaturesSection";
import { useTranslation } from "next-i18next";

const Services2 = () => {
  const { t } = useTranslation("services"); 

  return (
    <>
      <Head>
        <title>{t("page2.heroTitle")}</title>
        <meta name="description" content={t("page2.heroSubtitle")} />
      </Head>
      <TopNavbar />
      <Header />
      <main className="servicesPage2">
        <Hero />
        <KeyFeaturesSection />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common", "services"])), 
  },
});

export default Services2;

