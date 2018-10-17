import React, { Component } from 'react';
import './Carousel.css';

import cover1 from '../assets/header1.jpeg';
import salon1 from '../assets/salon1.jpg';
import cover2 from '../assets/header2.jpeg';
import cover3 from '../assets/header3-2.jpg';

import cover1Small from '../assets/header1-sm.jpeg';
import cover2Small from '../assets/header2-sm.jpeg';
import cover3Small from '../assets/header3-2-sm.jpg';

let timeout;
const CAROUSEL_TIMER = 8000;


export default class Carousel extends Component {
  state = {
    currentSlide: 0,
    imageList: [cover1, cover2, cover3, salon1],
    respImageList: [cover1Small, cover2Small, cover3Small]
  }

  selectImage(currentSlide) {
    // clear current interval so interval doesn't trigger after a selection
    clearInterval(timeout);

    //set currentSlide to new index
    this.setState({ currentSlide })

    // reset the timeout
    timeout = setInterval(() => {
      this.setState({
        currentSlide: this.state.currentSlide === this.state.imageList.length - 1 ? 0 : this.state.currentSlide + 1
      })
    }, CAROUSEL_TIMER)
  }

  nextImage() {
    clearInterval(timeout);
    this.setState({
      currentSlide: this.state.currentSlide === this.state.imageList.length - 1 ? 0 : this.state.currentSlide + 1
    })
    timeout = setInterval(() => {
      this.setState({
        currentSlide: this.state.currentSlide === this.state.imageList.length - 1 ? 0 : this.state.currentSlide + 1
      })
    }, CAROUSEL_TIMER)
  }

  previousImage() {
    clearInterval(timeout);
    this.setState({
      currentSlide: this.state.currentSlide === 0 ? this.state.imageList.length - 1 : this.state.currentSlide - 1
    })
    timeout = setInterval(() => {
      this.setState({
        currentSlide: this.state.currentSlide === this.state.imageList.length - 1 ? 0 : this.state.currentSlide + 1
      })
    }, CAROUSEL_TIMER)
  }

  componentDidMount() {
    //if timeout isn't already set, set timeout
    if (!timeout) {
      timeout = setInterval(() => {
        this.setState({
          currentSlide: this.state.currentSlide === this.state.imageList.length - 1 ? 0 : this.state.currentSlide + 1
        })
      }, CAROUSEL_TIMER)
    }

    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  componentWillUnmount() {
    clearInterval(timeout); //clear the interval whenever carousel is unmounted
  }

  render() {
    const { currentSlide, imageList, respImageList } = this.state;
    const imageElements = imageList.map((imageSrc, index) => {
      return (
        <img
          src={imageSrc}
          // srcSet={`${respImageList[index]} 600w, ${imageSrc} 1280w`}
          // sizes="100vw"
          key={index}
          style={currentSlide === index ? { opacity: 1 } : {}}
          alt=""
        />
      )
    });

    let productImageSelectButtons = imageList.map((image, index) => {
      return (
        <button
          key={image.id}
          onClick={() => this.selectImage(index)}
          style={currentSlide === index ? { backgroundColor: '#DB1313', transform: 'scale(1.2)' } : {}}
        ></button>
      )
    });

    return (
      <div className="carouselWrap">
        {imageElements}
        <div className="carousel__controls">
          <div className="carousel__counter">
            {'0' + (currentSlide + 1)} / {'0' + imageList.length}
          </div>
          <div>
            {productImageSelectButtons}
          </div>
        </div>
      </div>
    )
  }
}