import AboutUs from "@/Components/Layout/AboutUs";
import ContactUs from "@/Components/Layout/ContactUs";
import Footer from "@/Components/Layout/Footer";
import Header from "@/Components/Layout/Header";
import Hero from "@/Components/Layout/Hero";
import HomeMenu from "@/Components/Layout/HomeMenu";
import HomeMenuTitle from "@/Components/Layout/HomeMenuTitle";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenuTitle
        subHeader={"Check Out"}
        Header={"Our Best Sellers"}
        subSubHeader={"Chosen & Loved by Several Foodies !!"}
      />
      <HomeMenu />
      <hr className="mt-6"/>
      <HomeMenuTitle
        subHeader={"Our Story"}
        Header={"About Us"}
        subSubHeader={"The Origins of La Boucherie !!"}
      />
      <AboutUs />
      <hr className="mt-12"/>

      <HomeMenuTitle
        subHeader={"Don't Hesitate"}
        Header={"Contact Us"}
        subSubHeader={"Always There for Feedback !!"}
      />
      <ContactUs />
      <Footer />
    </>
  );
}
