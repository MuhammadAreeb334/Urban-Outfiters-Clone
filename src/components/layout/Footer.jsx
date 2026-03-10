import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  MessageSquare,
  Smartphone,
  Instagram,
  Facebook,
  Youtube,
  Music2,
} from "lucide-react";
import { FaPinterestP, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f4f4f4] mt-16 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-md">
          <h3 className="text-xl font-normal text-gray-900 mb-2">
            Sign-Up for Email
          </h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Sign up to receive Urban Outfitters emails and get first dibs on new
            arrivals, sales, exclusive content, events and more!
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col gap-2">
          <label className="text-[11px] font-bold uppercase tracking-widest text-gray-900">
            Email Address*
          </label>
          <div className="flex w-full md:w-[450px]">
            <input
              type="email"
              className="flex-grow border border-gray-400 bg-white px-4 py-2 outline-none focus:border-black transition-colors"
            />
            <button className="bg-[#222] text-white px-2 sm:px-10 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-black transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 pb-12">
        <p className="text-[10px] text-gray-500 max-w-4xl leading-loose">
          By entering your email address, you agree to receive Urban Outfitters
          offers, promotions, other commercial messages. You can view our{" "}
          <Link to="/" className="underline">
            Privacy Policy here
          </Link>{" "}
          and you may{" "}
          <Link to="/" className="underline">
            unsubscribe
          </Link>{" "}
          at any time.
        </p>
      </div>

      <hr className="border-gray-300" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <FooterColumn title="Help">
          <FooterLink>Order Status</FooterLink>
          <FooterLink>Start A Return Or Exchange</FooterLink>
          <FooterLink>Returns + Exchanges</FooterLink>
          <FooterLink>Shipping</FooterLink>
          <FooterLink>Orders + Payments</FooterLink>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>See All Help Topics</FooterLink>
        </FooterColumn>

        <FooterColumn title="Quick Links">
          <FooterLink>Student Discount</FooterLink>
          <FooterLink>Brands</FooterLink>
          <FooterLink>Gift Cards</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Shop Europe</FooterLink>
          <FooterLink>Shop Canada</FooterLink>
        </FooterColumn>

        <FooterColumn title="Extras">
          <FooterLink>Newsroom</FooterLink>
          <FooterLink>Affirm</FooterLink>
          <FooterLink>Afterpay</FooterLink>
          <FooterLink>Klarna</FooterLink>
          <FooterLink>UO MRKT</FooterLink>
          <FooterLink>UO Community</FooterLink>
          <FooterLink>Creative Services</FooterLink>
        </FooterColumn>

        <div className="flex flex-col gap-6 pt-2">
          <IconLink icon={<MapPin size={18} />} label="Store Location" />
          <IconLink icon={<Mail size={18} />} label="Sign Up For Email" />
          <IconLink icon={<Smartphone size={18} />} label="Sign Up For Texts" />
          <IconLink icon={<MessageSquare size={18} />} label="Chat With Us" />
        </div>
      </div>

      <div className="w-full pb-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-8 py-8">
          <div className="flex gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-6 text-gray-800">
            <Instagram
              size={22}
              className="cursor-pointer hover:text-gray-500 transition-colors"
            />
            <Facebook
              size={22}
              className="cursor-pointer hover:text-gray-500 transition-colors"
            />
            <Music2
              size={22}
              className="cursor-pointer hover:text-gray-500 transition-colors"
            />
            <FaPinterestP
              size={20}
              className="cursor-pointer hover:text-gray-500 transition-colors"
            />
            <Youtube
              size={24}
              className="cursor-pointer hover:text-gray-500 transition-colors"
            />
            <FaSpotify
              size={22}
              className="cursor-pointer hover:text-gray-500 transition-colors"
            />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-600 border-t border-gray-300 pt-8 gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/" className="hover:underline">
              Terms of Use
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/" className="hover:underline">
              CA Transparency
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/" className="hover:underline">
              Accessibility
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/" className="hover:underline">
              URBN.com
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/" className="hover:underline">
              Support Code
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/" className="font-bold text-black hover:underline">
              Your Privacy Choices
            </Link>
          </div>
          <p>© 2026 URBN UO Retail, LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};


const FooterColumn = ({ title, children }) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-[14px] font-bold text-gray-900">{title}</h4>
    <nav className="flex flex-col gap-2.5">{children}</nav>
  </div>
);

const FooterLink = ({ children }) => (
  <Link
    to="/"
    className="text-[13px] text-gray-600 hover:text-black hover:underline underline-offset-4 transition-all"
  >
    {children}
  </Link>
);

const IconLink = ({ icon, label }) => (
  <Link
    to="/"
    className="flex items-center gap-3 text-[13px] text-gray-700 hover:text-black group transition-all"
  >
    <span className="text-gray-500 group-hover:text-black transition-colors">
      {icon}
    </span>
    <span className="font-medium">{label}</span>
  </Link>
);

export default Footer;
