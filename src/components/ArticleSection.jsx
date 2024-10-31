import searchLight from "../assets/searchLight.svg";
import expandDownArrow from "../assets/expandDownArrow.svg";
import checkMark from "../assets/checkMark.svg";
import { blogPosts } from "@/data/blogPosts";
import { useState } from "react";

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
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [categoryInput, setCategoryInput] = useState("Highlight");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleCategoryClick = (category) => {
    setCategoryInput(category);
    setIsOpen(!isOpen);
  };

  return (
    <div className="ArticleSection bg-[#F9F8F6] font-[Poppins]  flex flex-col gap-5 md:px-28">
      <h1 className="lastest-article-text  font-[600] text-[24px] p-4 ">
        Latest articles
      </h1>

      <div className="sort-section bg-[#EFEEEB] text-[#75716B] md:flex justify-between items-center md:rounded-2xl">
        <div className="categoty-button-desktop hidden md:block">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="text-[#75716B] focus:text-[#43403B] focus:bg-[#DAD6D1] hover:bg-[#F9F8F6] p-3 m-4 rounded-lg"
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="search-box h-14 flex justify-between items-center border-gray-200 bg-white p-3 m-4 rounded-lg">
          <input
            type="text"
            placeholder="Search"
            className="placeholder-[#75716B]"
          ></input>
          <img src={searchLight} alt="search light icon"></img>
        </div>

        <div className="category-box-mobile md:hidden mb-4">
          <h2 className="px-4">Category</h2>
          <div className="expand-down-box  h-14 flex justify-between items-center border-gray-200 bg-white p-3 mx-4 my-1 rounded-lg">
            <p>{categoryInput}</p>
            <button onClick={() => toggleDropdown()}>
              <img src={expandDownArrow} alt="expand down arrow icon"></img>
            </button>
          </div>
          {isOpen && (
            <ul className="absolute left-1 right-1 bg-white border border-gray-200 rounded-lg shadow-lg mt-2  mx-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className="flex px-4 py-2 text-left hover:bg-gray-100 w-full text-black"
                  >
                    {category === categoryInput && (
                      <img src={checkMark} alt="check-mark"></img>
                    )}
                    <span>{category}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
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
