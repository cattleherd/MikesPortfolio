import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Showcase from "../components/Showcase"
import ContactForm from "../components/ContactForm";
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Layout>
        <Header/>
        <Hero />
        <Feature/>
        <Showcase/>
        <ContactForm/>
        <Footer/>
      </Layout>
    </>
  );
}
