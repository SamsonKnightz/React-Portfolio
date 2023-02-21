import Carousel from 'react-bootstrap/Carousel';



function Header() {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://wallpapers.net/web/wallpapers/dark-sea-horizon-hd-wallpaper/5120x2160.jpg"
              alt="First slide"
              height="300"
            />
            <Carousel.Caption>
              <h3 className="text-white fw-bolder">Samson Vang's React-Portfolio</h3>
              <p>"The only place that fear can exist is in our thoughts of the future. 
                It is a product of our imagination, causing us to fear things that do not at present and may not ever exist. 
                "</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://wallpapers.net/web/wallpapers/dark-sea-horizon-hd-wallpaper/5120x2160.jpg"
              alt="Second slide"
              height="300"
            />
    
            <Carousel.Caption>
              <h3 className="text-white fw-bolder">Samson Vang's React-Portfolio</h3>
              <p>"Insanity is doing the same thing over and over again, but expecting different results." -Vaas Montenegro</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://wallpapers.net/web/wallpapers/dark-sea-horizon-hd-wallpaper/5120x2160.jpg"
              alt="Third slide"
              height="300"
            />
    
            <Carousel.Caption>
              <h3 className="text-white fw-bolder">Samson Vang's React-Portfolio</h3>
              <p>
              Everything is OK in the end; if it’s not OK it’s not the end.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default Header;