import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}

export default App;

function NavBar() {
  return (
    <nav className="nav-bar font-[Poppins] h-20 flex flex-row justify-between items-center px-6 py-3 md:px-[120px] md:py-4 bg-[#F9F8F6] border-solid border-b-2 border-[#DAD6D1]">
      <h1 className="logo text-2xl font-bold">
        hh<span className="text-green-400">.</span>
      </h1>
      <div className="button-bar flex gap-8">
        <button class="hamburger-button md:hidden">
          <div class="w-6 h-0.5 bg-gray-400 mb-1"></div>
          <div class="w-6 h-0.5 bg-gray-400 mb-1"></div>
          <div class="w-6 h-0.5 bg-gray-400"></div>
        </button>
        <button className="log-in hidden md:block border-2 bg-white border-solid border-[#DAD6D1]  rounded-3xl px-10 py-4">
          log in
        </button>
        <button className="sign-in hidden md:block bg-black text-white  rounded-3xl px-10 py-4">
          sign in
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div class="hero-section font-[Poppins] bg-[#F9F8F6] px-4 py-10 md:px-[120px] md:py-[60px] flex flex-col items-center gap-10 md:flex-row md:justify-between">
      <div className="intro-text flex flex-col gap-4 md:w-[33%]">
        <h1 className="slogan font-[600] text-[40px] text-center md:text-right md:text-[52px]">
          Stay Informed, Stay Inspired
        </h1>
        <h2 className="brief text-[#75716B] font-[500] text-[16px] text-center md:text-right">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </h2>
      </div>
      <div class="image-container w-[343px] h-[470px] rounded-2xl overflow-hidden">
        <img
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="Personal-image"
          className="Personal-image h-full object-cover"
        ></img>
      </div>
      <div className="content flex flex-col gap-5 md:w-[33%]">
        <div className="top-part-content">
          <p class="text-[#75716B] text-[12px]">-Author</p>
          <h1 className="author-name text-[#43403B] text-[24px] font-[600]">
            Thomson P.
          </h1>
        </div>
        <p className="author-story1 text-[16px] text-[#75716B] font-[500] leading-6">
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <p className="author-story2 text-[16px] text-[#75716B] font-[500] leading-6">
          When i’m not writing, I spends time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </div>
    </div>
  );
}
