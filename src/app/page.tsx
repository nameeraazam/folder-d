import Header from "@/components/Header";
import "slick-carousel/slick/slick.css";
import Banner from "@/components/Banner";
import BannerBottom from "@/components/BannerBottom";
import Feature from "@/components/Feature";
import Mega from "@/components/Mega";
import AuthoreCard from "@/components/AuthoreCard"
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <BannerBottom />
      <Feature />
      <Mega/>
      <AuthoreCard/>
      <BlogCard/>
      <Footer />
    </>
  );
}
