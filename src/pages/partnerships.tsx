import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import TopNavbar from "../HomePageComponents/TopNavbar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import HeroSection from "../components/PartnershipPage/HeroSection";
import PartnershipCards from "../components/PartnershipPage/PartnershipCards";
import TestimonialsSection from "../components/PartnershipPage/TestimonialsSection";
const Partnership = () => {
  return (
    <>
      <Head>
        <title>Partnership</title>
        <meta
          name="description"
          content="Explore our strategic partnerships."
        />
      </Head>
      <TopNavbar />
      <Header />
      <main className="partnershipPage">
        <HeroSection />
        <PartnershipCards />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", [
      "common",
      "partnership",
    ])),
  },
});

export default Partnership;
