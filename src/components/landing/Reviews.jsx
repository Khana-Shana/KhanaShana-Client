import React from 'react';
import './reviews.scss'
import Footer from '../navigation/footer.jsx';
import firebase_integration from '../fire.js'


const oneStar = () => {
  return(
  <div className = "stars">
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
  </div>
  )
}

const twoStar = () => {
return(
<div className = "stars">
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
</div>
)
}

const threeStar = () => {
return(
<div className = "stars">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
</div>
)
}

const fourStar = () => {
return(
<div className = "stars">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
</div>
)
}

const fiveStar = () => {
return(
<div className = "stars">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
</div>
)
} 

const Carousel = () => {
    const [selectedIdx, setSelectedIdx] = React.useState(0);
    const [slideOrder, setSlideOrder] = React.useState(['s4', 's5', 's1', 's2', 's3']);
    const [slideStyles, setSlideStyles] = React.useState({});
    const [slidesdetails, setSlidesDetails] = React.useState([]);
    
    React.useEffect(() => {
    var mydata = []
      firebase_integration.database.collection("CustomerSupport").orderBy("Date", "desc").limit(5).get().then((snapshot) => {
        var custreviews = []  
        snapshot.forEach((doc) => {
          custreviews.push(doc.data())
        })
        setSlidesDetails(custreviews)
      })
    }, slidesdetails)

    const rotate = (slidesdetails) => {
      const [s1, s2, s3, s4, s5] = slidesdetails;
      setSlideStyles({
        [s1]: { transform: 'translateX(-60rem)', opacity: 0 },
        [s2]: { transform: 'translateX(-30rem)', opacity: 1 },
        [s3]: { transform: 'translateX(0)', opacity: 1 },
        [s4]: { transform: 'translateX(30rem)', opacity: 1 },
        [s5]: { transform: 'translateX(60rem)', opacity: 0 },
      });
      setSlideOrder(slidesdetails);
    };
  
    // rotate slides left by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [3, 4, 5, 1, 2]
    const rotateLeft = (spaces = 1) => {
      const s = slideOrder.map((_, i) => slideOrder[(i + spaces) % slideOrder.length]);
  
      setSelectedIdx((selectedIdx + spaces) % 5);
      rotate(s);
    };
  
    // rotate slides right by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [4, 5, 1, 2, 3]
    const rotateRight = (spaces = 1) => {
      const s = slideOrder.reduce((result, slide, i) => {
        result[(i + spaces) % slideOrder.length] = slide;
        return result;
      }, []);
  
      setSelectedIdx(4 - ((4 - selectedIdx + spaces) % 5));
      rotate(s);
    };
  
    const handleDotClick = idx => {
      if (idx > selectedIdx) {
        rotateLeft(idx - selectedIdx);
      } else if (idx < selectedIdx) {
        rotateRight(selectedIdx - idx);
      }
    };


    
    return (     
      <div className="carousel-wrap">
        <div className = "reviewstext">
        <div className = "reviews-title">
          CUSTOMER REVIEWS
          </div>
        </div>
        <div className="carousel-container">
          <button className="carousel-btn prev-btn" onClick={() => rotateLeft()}>
            <i className="carousel-btn__arrow left" />
          </button>
          <ul className="carousel-slide-list">
            {slidesdetails.map((slide, i) => (
              <CarouselSlideItem
                key={i+1}
                slide={slide}
                style={slideStyles[`s${i+1}`]}
                active={selectedIdx === i+1}
                className={`carousel-slide-item s${i+1}`}
              />
            ))}
          </ul>
          <button className="carousel-btn next-btn" onClick={() => rotateRight()}>
            <i className="carousel-btn__arrow right" />
          </button>
        </div>
        <div className="carousel-dots">
          {slidesdetails.map((_, i) => {
            const className = selectedIdx === i ? 'dot active' : 'dot';
            return (
              <button
                key={i}
                className={className}
                onClick={() => handleDotClick(i)}
              />
            );
          })}
        </div>
        <Footer/>
      </div>
    );
  };

  const checkRating = (slide) => {
    if(slide.Rating === 1)
    {
      return oneStar();
    } else if(slide.Rating === 2)
    {
      return twoStar();
    } else if(slide.Rating === 3)
    {
      return threeStar();
    } else if(slide.Rating === 4)
    {
      return fourStar();
    }  else if(slide.Rating === 5)
    {
      return fiveStar();
    }
  }
  
  const CarouselSlideItem = ({ slide, style, className, active }) => (
    <li className={className} style={style}>
      <div className="carousel-slide-item__body">
        {checkRating(slide)}
        <h5>{slide.Subject}</h5>
        <p>{slide.Message}</p>
      </div>
    </li>
  );
  
export default Carousel;



