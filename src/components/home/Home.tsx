// Home page component with hero and discount sections
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      {/* Hero section with background image and welcome message */}
      <div className="home">
        <div className="image">
          <img src="/image/background.jpg" alt="Shrimp Zone" />
        </div>
        <div className="home-container">
          <div className="home-content">
            <h1>Welcome to Shrimp Zone</h1>
            <p>
              Discover the best shrimp dishes in town. Fresh, delicious, and
              made with love.
            </p>
            <button className="order-now">Order Now</button>
          </div>
        </div>
      </div>
      {/* Discount offers section */}
      <div className="discount-section container py-5">
        <div className="discount-box" data-aos="fade-left">
          <div className="discount-text">
            <h2 className="title">Special Offer</h2>
            <p className="desc">Get 20% off your first order!</p>
            <button className="claim-btn">Claim Offer</button>
          </div>
          <div className="discount-img">
            <img src="/image/discoutt.png" alt="20% Discount" />
          </div>
        </div>

        <div className="discount-box reverse" data-aos="fade-right">
          <div className="discount-text">
            <h2 className="title">Special Offer</h2>
            <p className="desc"> Up to 80% OFF Eat More, Pay Less!</p>
            <button className="claim-btn">Claim Offer</button>
          </div>
          <div className="discount-img">
            <img src="/image/discout.png" alt="Shrimp Zone" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
