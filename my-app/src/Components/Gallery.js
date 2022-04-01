import "../Gallery.css";
import GalleryCarousel from "./GalleryCarousel";
import {useState} from "react";

const Gallery = () => {
  const [currentImages, setCurrentImages] = useState(0)

  const imageBank = [{image:"https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg"},{image:"https://cdn.pixabay.com/photo/2018/04/07/16/30/auto-3298890_1280.jpg"},
{image:"https://cdn.pixabay.com/photo/2017/12/28/23/41/car-3046424_960_720.jpg"},{image:"https://cdn.pixabay.com/photo/2017/02/27/08/27/car-2102367_960_720.jpg"}]
const length = imageBank.length
const nextSlide = () => {
  setCurrentImages(currentImages === length -1 ? 0 : currentImages + 1)
}

const previousSlide = () => {
  setCurrentImages(currentImages === 0 ? length -1 : currentImages - 1)
}




if(!Array.isArray(imageBank) || imageBank.length <= 0) {
  return null;
}
  return(  
  <div className="gallery">
        <h3> Gallery</h3>
     <div className="galleryIntro">
        <p>At Ace Powder Coating, we take pride in our work. Here is just some of the work we have done over the years.</p>
     </div>
    <div div className="imageCarousel">
      <button onClick={previousSlide} className="arrowLeft">&#8249;</button>
    {imageBank.map((image, index) => {
    return (
      <div className={index === currentImages ? 'slideActive' : 'slide'} key={index}> 
      {index === currentImages && ( <img src={image.image} alt='powder coated item' className='image' />)}
     </div>
    )})}
    <button onClick={nextSlide} className="arrowRight" >&#8250;</button>
    </div>
    </div>
    )
    }

export default Gallery;