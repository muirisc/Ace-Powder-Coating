const GalleryCarousel = (image, nextSlide, previousSlide) => {



return(
  <section className="imageBox">
    <div className="image">
      <button onClick={nextSlide} />
     <img src={image.image} alt="powder coated item" />
     <button onClick={previousSlide} />
    </div>
  </section>
)
}
export default GalleryCarousel;
