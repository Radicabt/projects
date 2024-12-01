import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import TopNavbar from "../HomePageComponents/TopNavbar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import Hero from "../components/NewsletterPage/Hero";
import RelatedNews from "../components/NewsletterPage/RelatedNews";
import Carousel from "../components/NewsletterPage/Carousel";
import ContactUs from "../components/NewsletterPage/ContactUs";
const Newsletter = () => {
  return (
    <>
      <Head>
        <title>Newsletter</title>
        <meta name="description" content="Stay informed about the latest cybersecurity threats and prevention strategies." />
      </Head>
      <TopNavbar />
      <Header />
      <main>
        <Hero />
        <RelatedNews />
        <Carousel />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common", "newsletter"])),
  },
});

export default Newsletter;
