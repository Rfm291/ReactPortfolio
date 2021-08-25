import React, {useState} from 'react';


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

let Project = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.data.project.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.data.project.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = props.data.project.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={props.data.project.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >

      

      <div className="container bg-dark" background="grey">        
        <a href={item.githubUrl}><img className="d-block w-100" src={item.imgurl} alt=""/></a>
        <a href={item.liveUrl}><CarouselCaption className="text-success caption-text" captionText={item.description} captionHeader={item.name} /></a>
      </div>
        
      </CarouselItem>
    );
  });

  return (
    <div> 
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: white;
            }
          .carousel-item, .carousel-item.active {
              align-items:center;
          }
          .caption-text{
            background: black;
            margin: auto;
          }
          .control{
            background: grey;
            margin: auto;
          }`
        }
      </style>
      <div><br/><br/><br/><br/><br/><p>Click on screenshot for Github link and title for live link</p></div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={props.data.project} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        
        <CarouselControl className="control" direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl className="control" direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}
export default Project;
