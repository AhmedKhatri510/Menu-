import React from "react";

const Categories = ({ filter, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className="filter-btn"
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
