const MyCarousel = () => {
    return ( 
        <div className="carousel-width">
                        <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-indicators ">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://res.cloudinary.com/dengtj8wq/image/upload/v1704706322/still-life-with-scales-justice_23-2149776027_nuogdc.jpg" class="d-block w-100 cor" alt="...">
              </img>
              </div>
              <div class="carousel-item">
                <img src="https://res.cloudinary.com/dengtj8wq/image/upload/v1704706475/judge-gavel-scales-justice-court-hall-law-concept-judiciary-jurisprudence-justice-copy-space-based-generative-ai_438099-12310_hpulk7.avif" class="d-block w-100 cor" alt="...">
                </img>
              </div>
              <div class="carousel-item">
                <img src="https://res.cloudinary.com/dengtj8wq/image/upload/v1704706562/close-up-lawyer-ai-robot_23-2151015327_bmaxg0.avif" class="d-block w-100 cor" alt="...">
              </img>
              </div>
              <div class="carousel-item">
                <img src="https://res.cloudinary.com/dengtj8wq/image/upload/v1704706538/internet-law-concept-with-computer-notebook-display-law-scale_493806-4192_utuvbx.avif" class="d-block w-100 cor" alt="...">
              </img>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
     );
}
 
export default MyCarousel;