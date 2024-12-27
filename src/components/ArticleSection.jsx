import searchLight from "../assets/searchLight.svg";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import CategorySelectorMobile from "./CategorySelectorMobile";
import axios from "axios";

function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [categoryInput, setCategoryInput] = useState("Highlight");
  const [blogPosts, setBlogPosts] = useState([]); // Store the blog posts
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Track the current page
  const [hasMore, setHasMore] = useState(true); // Flag to check if more posts are available

  const limit = 6; // Number of posts per page

  // Fetch blog posts based on category and pagination
  const fetchBlogPosts = async (category, page) => {
    setLoading(true); // Set loading state to true when fetching data
    try {
      let url = `https://blog-post-project-api.vercel.app/posts?limit=${limit}&page=${page}`;

      if (category !== "Highlight") {
        url += `&category=${category}`; // Only include category filter if it's not "Highlight"
      }

      const response = await axios.get(url);
      const posts = response.data.posts;

      setBlogPosts((prevPosts) =>
        page === 1 ? posts : [...prevPosts, ...posts]
      );
      if (posts.length < limit) {
        setHasMore(false); // If there are fewer than `limit` posts, no more posts are available
      }

      setLoading(false); // Set loading state to false after data is fetched
    } catch (err) {
      setError("Failed to fetch blog posts");
      setLoading(false); // Set loading state to false if there's an error
    }
  };

  // Handle category click and fetch data for selected category
  const handleCategoryClick = (category) => {
    setCategoryInput(category); // Set the selected category
    setPage(1); // Reset page to 1 when a new category is selected
    setBlogPosts([]); // Clear the current posts
    setHasMore(true); // Reset hasMore flag to true
    fetchBlogPosts(category, 1); // Fetch the first page of posts for the selected category
  };

  // Fetch blog posts for the selected category and page when the component mounts
  useEffect(() => {
    fetchBlogPosts(categoryInput, page);
  }, [categoryInput, page]);

  return (
    <div className="ArticleSection bg-[#F9F8F6] font-[Poppins] flex flex-col gap-5 lg:px-28">
      <h1 className="lastest-article-text font-[600] text-[24px] p-4">
        Latest articles
      </h1>

      <div className="sort-section bg-[#EFEEEB] text-[#75716B] lg:flex justify-between items-center lg:rounded-2xl">
        <div className="category-button-desktop hidden lg:block">
          {categories.map((category, index) => {
            const isSelected = category === categoryInput;
            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`text-[#75716B] ${
                  isSelected
                    ? "bg-[#DAD6D1] text-[#43403B]"
                    : "hover:bg-[#F9F8F6]"
                } p-3 m-4 rounded-lg`}
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
          />
          <img src={searchLight} alt="search light icon" />
        </div>

        <CategorySelectorMobile
          categories={categories}
          categoryInput={categoryInput}
          handleCategoryClick={handleCategoryClick}
        />
      </div>

      <div className="blog-cards px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mx-[-15px]">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}

        {!loading && !error && blogPosts.length === 0 && (
          <div>No blog posts found for this category.</div>
        )}

        {!loading &&
          !error &&
          blogPosts.map((item) => <BlogCard blogPost={item} key={item.id} />)}
      </div>

      {hasMore && !loading && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setPage((prevPage) => prevPage + 1)}
            className="bg-[#DAD6D1] text-[#43403B] px-6 py-3 rounded-lg"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default ArticleSection;
