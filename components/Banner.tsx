// React and Next.js imports
import Image from "next/image";

// Local image imports
import bannerImgOne from "../../public/images/goo1.jpg";

const Banner = () => {
  return (
    <div className="w-full h-auto md:h-[650px] relative">
      {/* Display only the first banner image */}
      <div>
        <Image
          className="w-full h-auto md:h-[650px] object-cover"
          src={bannerImgOne}
          loading="eager"
          alt="bannerImgOne"
        />
      </div>
    </div>
  );
};

export default Banner;
