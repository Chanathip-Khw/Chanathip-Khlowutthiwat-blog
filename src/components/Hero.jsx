export function HeroSection() {
  return (
    <div class="hero-section font-[Poppins] bg-[#F9F8F6] px-4 py-10 lg:px-[120px] lg:py-[60px] flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
      <div className="intro-text flex flex-col gap-4 lg:w-[33%]">
        <h1 className="slogan font-[600] text-[40px] text-center lg:text-right lg:text-[52px]">
          Stay Informed, Stay Inspired
        </h1>
        <h2 className="brief text-[#75716B] font-[500] text-[16px] text-center lg:text-right">
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
      <div className="content flex flex-col gap-5 lg:w-[33%]">
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
