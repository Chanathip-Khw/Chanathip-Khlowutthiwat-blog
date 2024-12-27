function BlogCard({ blogPost }) {
  let date = blogPost.date;
  date = new Date(date);
  date = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="blog-card flex flex-col gap-2">
      <img
        src={blogPost.image}
        alt={blogPost.title}
        className="image rounded-lg h-[212px] lg:h-[360px] object-cover"
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
        <h2 className="date pl-4 text-[#75716B]">{date}</h2>
      </div>
    </div>
  );
}

export default BlogCard;
