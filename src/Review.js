import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = function (number) {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };
  const nextReview = function () {
    setIndex((prevState) => checkNumber(prevState + 1));
  };

  const prevReview = function () {
    setIndex((prevState) => checkNumber(prevState - 1));
  };
  const randomReview = function () {
    const number = Math.floor(Math.random() * people.length);
    setIndex(number);
    if (index === number) {
      setIndex(checkNumber(number + 1));
    }
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
