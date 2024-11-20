import expandDownArrow from "../assets/expandDownArrow.svg";
import checkMark from "../assets/checkMark.svg";
import { useState } from "react";

function CategorySelectorMobile({ categories, categoryInput, handleCategoryClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-selector-mobile lg:hidden mb-4">
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
                onClick={() => {handleCategoryClick(category); toggleDropdown()}}
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
  );
}

export default CategorySelectorMobile;
