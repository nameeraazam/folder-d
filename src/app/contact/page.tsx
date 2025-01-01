import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

function ContactPage() {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-24">
      {/* Breadcrumb */}
      <div className="flex gap-3 text-sm text-gray-600 mb-8">
        <Link href={'/'}>
          Home
        </Link>
        <span>/</span>
        <Link href={'/contact'}>
          Contact
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Information */}
        <div className="flex flex-col gap-6 bg-white border-2 border-black text-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-600">Contact Information</h2>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-full text-white">
              <FiPhone className="text-2xl" />
            </div>
            <div>
              <p className="font-semibold">Call Us</p>
              <p>We are available 24/7</p>
              <p className="font-semibold">+923162061048</p>
            </div>
          </div>

          <hr className="my-4 border-gray-300" />

          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-full text-white">
              <AiOutlineMail className="text-2xl" />
            </div>
            <div>
              <p className="font-semibold">Email Us</p>
              <p>We will respond within 24 hours</p>
              <p className="font-semibold">syeda23@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-6 bg-white border-2 border-black p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-600">Get In Touch</h2>

          <div className="flex flex-col md:flex-row gap-6">
            <input
              className="bg-gray-100 py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full md:w-[48%]"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-gray-100 py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full md:w-[48%]"
              type="email"
              placeholder="Your Email"
            />
          </div>

          <input
            className="bg-gray-100 py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full mb-6"
            type="text"
            placeholder="Your Phone"
          />

          <textarea
            className="bg-gray-100 py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full mb-6"
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all w-full md:w-auto">
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
}

export default ContactPage;
