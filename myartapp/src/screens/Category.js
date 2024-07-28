import React from "react";

const categories = [
  {
    name: "Ceramics",
    description: "Handcrafted ceramic items including vases, bowls, and more."
  },
  {
    name: "Sculptures",
    description: "Hand-carved and molded sculptures made from various materials."
  },
  {
    name: "Jewelry",
    description: "Handmade jewelry pieces including necklaces, rings, and earrings."
  },
  {
    name: "Textiles",
    description: "Handcrafted textile items such as scarves, blankets, and clothing."
  },
  {
    name: "Accessories",
    description: "Handmade accessories including wallets, bags, and belts."
  },
  {
    name: "Paintings",
    description: "Hand-painted artworks in various styles and mediums."
  },
  {
    name: "Furniture",
    description: "Handcrafted furniture pieces made from wood, metal, and other materials."
  },
  {
    name: "Architecture",
    description: "Design and creation of buildings and other structures."
  },
  {
    name: "Literature",
    description: "Written works, including novels, poems, and essays."
  },
  {
    name: "Music",
    description: "Creation and performance of musical works."
  },
  {
    name: "Performing Arts",
    description: "Art forms that involve performance, including theatre, dance, and more."
  },
  {
    name: "Cinema",
    description: "The art of filmmaking, including direction, production, and acting."
  }
];

export default function Category() {
  return (
    <div>
      <h1>Art Categories</h1>
      {categories.map((category, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
}
