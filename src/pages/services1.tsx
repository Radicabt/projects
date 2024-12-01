import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import TopNavbar from "../HomePageComponents/TopNavbar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import Hero from "../components/ServicesPage1/Hero";
import KeyFeaturesSection from "../components/ServicesPage1/KeyFeaturesSection";
import { useTranslation } from "next-i18next";

const Services1 = () => {
  const { t } = useTranslation("services"); 

  return (
    <>
      <Head>
        <title>{t("page1.heroTitle")}</title>
        <meta name="description" content={t("page1.heroSubtitle")} />
      </Head>
      <TopNavbar />
      <Header />
      <main className="servicesPage1">
        <Hero />
        <KeyFeaturesSection />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common", "services"])), // Ensure 'services' matches the JSON namespace
  },
});

export default Services1;
