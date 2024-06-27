import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import ArtCarousel from '../components/Carousel';
import ArtCard from '../components/Card';

export default function Home() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className="container mt-4">
        
        <ArtCarousel />

        <h2 className="mt-4"></h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <ArtCard />
          </div>
          <div className="col-md-4 mb-4">
            <ArtCard />
          </div>
          <div className="col-md-4 mb-4">
            <ArtCard />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
