import searchLight from "../assets/searchLight.svg";
import expandDownArrow from "../assets/expandDownArrow.svg";
import { blogPosts } from "@/data/blogPosts";

function BlogCard({ blogPost }) {
  return (
    <div className="blog-card flex flex-col gap-2">
      <img
        src={blogPost.image}
        alt={blogPost.title}
        className="image rounded-lg h-[212px] md:h-[360px] object-cover"
      ></img>
      <div className="flex justify-start">
        <p className="category-tag bg-[#D7F2E9] text-[#12B279] rounded-2xl p-2 text-center">
          {blogPost.category}
        </p>
      </div>
      <h1 className="title text-[20px] font-[600]">{blogPost.title}</h1>
      <p className="description text-[#75716B] text-[14px]">
        {blogPost.description}
      </p>
      <div className="flex flex-row text-[14px]">
        <h2 className="author pr-4 border-r-2 ">{blogPost.author}</h2>
        <h2 className="date pl-4 text-[#75716B]">{blogPost.date}</h2>
      </div>
    </div>
  );
}

function ArticleSection() {
  return (
    <div className="ArticleSection bg-[#F9F8F6] font-[Poppins]  flex flex-col gap-5 md:px-28">
      <h1 className="lastest-article-text  font-[600] text-[24px] p-4 ">
        Latest articles
      </h1>
      <div className="sort-section bg-[#EFEEEB] text-[#75716B] md:flex justify-between items-center md:rounded-2xl">
        <div className="categoty-button hidden md:block">
          <button className="text-[#75716B] focus:text-[#43403B] focus:bg-[#DAD6D1] p-3 m-4 rounded-lg">
            Highlight
          </button>
          <button className="text-[#75716B] focus:text-[#43403B] focus:bg-[#DAD6D1] p-3 m-4 rounded-lg">
            Cat
          </button>
          <button className="text-[#75716B] focus:text-[#43403B] focus:bg-[#DAD6D1] p-3 m-4 rounded-lg">
            Inspiration
          </button>
          <button className="text-[#75716B] focus:text-[#43403B] focus:bg-[#DAD6D1] p-3 m-4 rounded-lg">
            General
          </button>
        </div>
        <div className="search-box h-14 flex justify-between items-center bg-white p-3 m-4 rounded-lg">
          <input
            type="text"
            placeholder="Search"
            className="placeholder-[#75716B]"
          ></input>
          <img src={searchLight} alt="search light icon"></img>
        </div>
        <div className="category-box md:hidden">
          <h2 className="px-4">Category</h2>
          <div className="expand-down-box h-14 flex justify-between items-center bg-white p-3 mx-4 my-1 rounded-lg">
            <p>Hightlight</p>
            <img src={expandDownArrow} alt="expand down arrow icon"></img>
          </div>
        </div>
      </div>
      <div className="blog-cards px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-[-15px]">
        {blogPosts.map((item) => (
          <BlogCard blogPost={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ArticleSection;
