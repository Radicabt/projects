import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import TopNavbar from "../HomePageComponents/TopNavbar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import Hero from "../components/AboutPage/Hero";
import MissionCards from "../components/AboutPage/MissionCards";
import LocationsSection from "../components/AboutPage/LocationsSection";
import FoundersSection from "../components/AboutPage/FoundersSection";
import CybersecuritySpecialistsSection from "../components/AboutPage/CybersecuritySpecialistsSection";
import SecurityAwarenessAdvisors from "../components/AboutPage/SecurityAwarenessAdvisors";
import CertificationCards from "../components/AboutPage/CertificationCards";
import SuccessCarousel from "../components/AboutPage/SuccessCarousel";
const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company." />
      </Head>
      <TopNavbar />
      <Header />
      <main>
        <Hero />
        <MissionCards />
        <LocationsSection />
        <FoundersSection />
        <CybersecuritySpecialistsSection />
        <SecurityAwarenessAdvisors />
        <CertificationCards />
        <SuccessCarousel />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common", "about"])),
  },
});

export default About;
