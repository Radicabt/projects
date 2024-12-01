import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import TopNavbar from "../HomePageComponents/TopNavbar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import Hero from "../components/ServicesPage5/Hero";
import KeyFeaturesSection from "../components/ServicesPage5/KeyFeaturesSection";
import { useTranslation } from "next-i18next";

const Services5 = () => {
  const { t } = useTranslation("services"); 

  return (
    <>
      <Head>
        <title>{t("page5.heroTitle")}</title>
        <meta name="description" content={t("page5.heroSubtitle")} />
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
    ...(await serverSideTranslations(locale || "en", ["common", "services"])), 
  },
});

export default Services5;