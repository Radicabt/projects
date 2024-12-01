import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import TopNavbar from "../HomePageComponents/TopNavbar";
import Header from "../HomePageComponents/Header";
import HeroSection from "../HomePageComponents/HeroSection";
import HomeServicesCards from "../HomePageComponents/HomeServicesCards";
import AboutSection from "../HomePageComponents/AboutSection";
import PromoSection from "../HomePageComponents/PromoSection";
import IndustriesSection from "../HomePageComponents/IndustriesSection";
import PartnersSection from "../HomePageComponents/PartnersSection";
import LeadershipSection from "../HomePageComponents/LeadershipSection";
import ReachOutSection from "../HomePageComponents/ReachOutSection";
import IsoSection from "../HomePageComponents/IsoSection";
import Newsletter from "../HomePageComponents/NewsletterSection";
import Testimonials from "../HomePageComponents/TestimonialsSection";
import Footer from "../HomePageComponents/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cyberware Global Defense</title>
        <meta
          name="description"
          content="Cybersecurity solutions for a secure digital future."
        />
      </Head>
      <TopNavbar />
      <Header />
      <main>
        <HeroSection />
        <HomeServicesCards />
        <AboutSection />
        <PromoSection />
        <IndustriesSection />
        <LeadershipSection />
        <PartnersSection />
        <ReachOutSection />
        <IsoSection />
        <Newsletter />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common"])),
  },
});

export default Home;
