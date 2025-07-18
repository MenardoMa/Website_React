import { Button } from "../Button/Button";
import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";

export const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          consectetur beatae asperiores error, eius excepturi nisi, voluptatem
          laboriosam, delectus impedit blanditiis maiores nihil a perspiciatis.
          Ad eius repellat officiis perspiciatis.
        </p>
        <Button className="primary">
          Explore more <img src={darkArrow} alt="arrow" />{" "}
        </Button>
      </div>
    </div>
  );
};
