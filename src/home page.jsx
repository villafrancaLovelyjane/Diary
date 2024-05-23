import { Carousel, Image } from "react-bootstrap";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";

const Homepage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/image2.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="container-fluid vh-100 bg-dark d-flex justify-content-center align-items-center"
    >
      <Carousel fade={true}>
        <Carousel.Item>
          <div className="wrapper w-100 d-flex justify-content-center">
            <Image style={{ width: "500px", height: "300px" }} src={img9} />
            <Carousel.Caption>
              <h3 className="text-black">Diary</h3>
              <p className="text-black">
                This where you can write your thougths.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="wrapper w-100 d-flex justify-content-center">
            <Image style={{ width: "500px", height: "300px" }} src={img10} />
            <Carousel.Caption>
              <h3>Diary</h3>
              <p>This where you can write your thougths.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Homepage;
