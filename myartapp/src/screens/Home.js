import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import ArtCarousel from '../components/Carousel';
import ArtCard from '../components/Card';

export default function Home() {
  const [artcate, setartcate] = useState([]);
  const [maindata, setmaindata] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/maindata", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      response = await response.json();

      console.log("API Response:", response); // Log the entire response

      // Check the structure of the response
      if (Array.isArray(response) && response.length >= 2) {
        setmaindata(response[0] || []);
        // Assuming the first element contains an object with an array named handcraftedArts
        setartcate(response[0][0]?.handcraftedArts || []);
        console.log("Main data set:", response[0]);
        console.log("Art pieces set:", response[0][0]?.handcraftedArts);
      } else {
        console.error("Unexpected response format:", response);
      }

    } catch (error) {
      console.error("Failed to load data:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className="container mt-4">
        <ArtCarousel />

        <h2 className="mt-4">Art Pieces</h2>
        <div className="row">
          {Array.isArray(artcate) && artcate.length > 0
            ? artcate.map((art) => {
                return (
                  <div className="col-md-4 mb-4" key={art.id}> {/* Ensure key is set */}
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{art.title}</h5>
                        <p className="card-text">{art.description}</p>
                        <p className="card-text"><strong>Artist:</strong> {art.artist}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            : <p>No art pieces available</p>
          }
        </div>
        <ArtCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
