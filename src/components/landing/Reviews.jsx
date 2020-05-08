/* Credit: https://codepen.io/ryasan86/pen/QXwEbM */

import React from "react";
import Footer from "../navigation/footer.jsx";
import firebase_integration from "../fire.js";
import "./reviews.scss";

/* This function returns a star on the customer review card. */
const oneStar = () => {
  return (
    <div className="stars">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
  );
};

/* This function returns two stars on the customer review card. */
const twoStar = () => {
  return (
    <div className="stars">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
  );
};

/* This function returns three stars on the customer review card. */
const threeStar = () => {
  return (
    <div className="stars">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
  );
};

/* This function returns four stars on the customer review card. */
const fourStar = () => {
  return (
    <div className="stars">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
    </div>
  );
};

/* This function returns five stars on the customer review card. */
const fiveStar = () => {
  return (
    <div className="stars">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
    </div>
  );
};

const Carousel = () => {
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [slideOrder, setSlideOrder] = React.useState([
    "s4",
    "s5",
    "s1",
    "s2",
    "s3",
  ]); /* initializing five slides to the useState function */
  const [slideStyles, setSlideStyles] = React.useState({});
  const [slidesdetails, setSlidesDetails] = React.useState([]);

  React.useEffect(() => {
    var mydata = [];
    /* Retrieving details of top five customer reviews from the backend database. */
    try {
      firebase_integration.database
        .collection("CustomerSupport")
        .orderBy("Date", "desc")
        .limit(5)
        .get()
        .then((snapshot) => {
          var custreviews = [];
          snapshot.forEach((doc) => {
            custreviews.push(doc.data());
          });
          setSlidesDetails(custreviews);
        });
    } catch (error) {
      alert("An error occured. Please try again");
    }
  }, slidesdetails);

  const rotate = (slidesdetails) => {
    const [s1, s2, s3, s4, s5] = slidesdetails;
    setSlideStyles({
      /* Setting manual transitions on the five customer review slides */
      [s1]: { transform: "translateX(-60rem)", opacity: 0 },
      [s2]: { transform: "translateX(-30rem)", opacity: 1 },
      [s3]: { transform: "translateX(0)", opacity: 1 },
      [s4]: { transform: "translateX(30rem)", opacity: 1 },
      [s5]: { transform: "translateX(60rem)", opacity: 0 },
    });
    setSlideOrder(slidesdetails);
  };

  /* rotate slides left by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [3, 4, 5, 1, 2] */
  const rotateLeft = (spaces = 1) => {
    const s = slideOrder.map(
      (_, i) => slideOrder[(i + spaces) % slideOrder.length]
    );

    setSelectedIdx((selectedIdx + spaces) % 5);
    rotate(s);
  };

  /* rotate slides right by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [4, 5, 1, 2, 3] */
  const rotateRight = (spaces = 1) => {
    const s = slideOrder.reduce((result, slide, i) => {
      result[(i + spaces) % slideOrder.length] = slide;
      return result;
    }, []);

    setSelectedIdx(4 - ((4 - selectedIdx + spaces) % 5));
    rotate(s);
  };

  const handleDotClick = (idx) => {
    if (idx > selectedIdx) {
      rotateLeft(idx - selectedIdx);
    } else if (idx < selectedIdx) {
      rotateRight(selectedIdx - idx);
    }
  };

  return (
    <div className="carousel-wrap">
      <div className="reviewstext">
        <div className="reviews-title">CUSTOMER REVIEWS</div>
      </div>
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={() => rotateLeft()}>
          <i
            style={{ color: "#955F61" }}
            class="fa fa-arrow-left"
            aria-hidden="true"
          ></i>
        </button>
        <ul className="carousel-slide-list">
          {slidesdetails.map((slide, i) => (
            <CarouselSlideItem
              key={i + 1}
              slide={slide}
              style={slideStyles[`s${i + 1}`]}
              active={selectedIdx === i + 1}
              className={`carousel-slide-item s${i + 1}`}
            />
          ))}
        </ul>
        <button className="carousel-btn next-btn" onClick={() => rotateRight()}>
          <i
            style={{ color: "#955F61" }}
            class="fa fa-arrow-right"
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <div className="carousel-dots">
        {slidesdetails.map((_, i) => {
          const className = selectedIdx === i ? "dot active" : "dot";
          return (
            <button
              key={i}
              className={className}
              onClick={() => handleDotClick(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

/* Checking the rating retrieved from the database and calling the rating function accordingly. */
const checkRating = (slide) => {
  if (slide.Rating === 1) {
    return oneStar();
  } else if (slide.Rating === 2) {
    return twoStar();
  } else if (slide.Rating === 3) {
    return threeStar();
  } else if (slide.Rating === 4) {
    return fourStar();
  } else if (slide.Rating === 5) {
    return fiveStar();
  }
};

/* Setting up the texture of an individual customer review slide. */
const CarouselSlideItem = ({ slide, style, className, active }) => (
  <li className={className} style={style}>
    <div className="carousel-slide-item__body">
      {checkRating(slide)}
      <h4>{slide.Subject}</h4>
      <p>{slide.Message}</p>
    </div>
  </li>
);

export default Carousel;
