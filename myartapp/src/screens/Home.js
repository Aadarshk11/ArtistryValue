import React from "react";
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <div>
        <NavigationBar/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
