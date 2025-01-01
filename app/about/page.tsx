import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../../public/images/nameera.png";
import founder from "../../../public/images/na2.png";
import manager from "../../../public/images/na.jpg";
import designer from "../../../public/images/na3.png";
import Footer from "../../components/Footer";
import { BiStore } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import { BsSuitcase2 } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

function Page() {
  return (
    <>
      <div className="flex gap-3 mx-5 mt-5 lg:mx-24 lg:mt-16 lg:mb-10">
        <Link className="text-blue-500" href={"/"}>
          Home
        </Link>
        <p>/</p>
        <Link href={"/about"}>About</Link>
      </div>

      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 mt-12 mb-32">
        <Image
          className="w-full lg:w-[650px] rounded-full"
          src={aboutImg}
          alt="A visual representation of our blog"
        />
        <div className="flex flex-col w-full lg:w-1/2 justify-center gap-4 px-5 lg:px-24 text-blue-500 font-bold">
          <h1 className="text-3xl lg:text-[54px] text-black ">About Us</h1>
          <p>
            Welcome to our blog! We are a passionate team of writers and creatives dedicated to providing our readers with insightful, engaging, and informative content. Our mission is to explore a wide range of topics, from the latest trends in technology and lifestyle to thought-provoking discussions on culture, travel, and personal development.
          </p>
          <p>
            We believe that knowledge should be shared and our goal is to create a space where everyone can find something valuable whether its tips for improving daily life in-depth reviews or inspiring stories.
          </p>
          <p>
            At our core, we are more than just a blog—we are a community. We welcome feedback, discussions, and suggestions from our readers, as we strive to grow and evolve with you. Thank you for visiting, and we hope you enjoy reading our posts as much as we enjoy creating them!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-24 my-10">
        {[
          { icon: <BiStore className="text-blue-500" />, title: "10.7k", desc: "Engaging and Informative Content" },
          { icon: <AiOutlineDollar className="text-blue-500" />, title: "38k", desc: "Personal Growth and Development" },
          { icon: <BsSuitcase2 className="text-blue-500" />, title: "49.5k", desc: "Community and Connection" },
          { icon: <FaSackDollar className="text-blue-500" />, title: "29k", desc: "Convenient Learning" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 justify-center items-center rounded-sm border border-[#707070] w-full h-[230px] hover:bg-blue-500 hover:text-white transition-all"
          >
            <div className="w-20 h-20 p-2 rounded-full bg-[#707070]">
              <p className="flex justify-center items-center w-16 h-16 rounded-full bg-black text-white text-[40px]">
                {item.icon}
              </p>
            </div>
            <h1 className="text-[32px] font-bold">{item.title}</h1>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mx-5 lg:mx-24 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-500">
          {[
            { image: founder, name: "Tom Cruise", position: "Journalist" },
            { image: manager, name: "Emma Watson", position: "Managing Director" },
            { image: designer, name: "David Arthur", position: "Product Designer" },
          ].map((member, index) => (
            <div key={index} className="flex flex-col gap-5 items-center">
              <Image
                className="w-[200px] h-[220px] rounded-full"
                src={member.image}
                alt={member.name}
              />

              <div className="flex flex-col leading-8 text-center">
                <h1 className="text-[24px] lg:text-[32px]">{member.name}</h1>
                <p>{member.position}</p>
                <ul className="flex items-center justify-center gap-3 mt-2">
                  <li className="text-xl">
                    <Link href={"https://twitter.com/"}>
                      <FiTwitter />
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link href={"https://instagram.com/"}>
                      <FaInstagram />
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link href={"https://linkedin.com/"}>
                      <RiLinkedinLine />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 my-10">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className={`w-[14px] h-[14px] rounded-full ${
                  index === 2
                    ? "border-2 border-[#707070] bg-[#db4444]"
                    : "bg-[#707070]"
                }`}
              ></div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
