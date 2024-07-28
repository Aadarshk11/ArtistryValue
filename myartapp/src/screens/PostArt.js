import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

export default function PostArt() {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    description: "",
    materials: "",
    dimensions: {
      height: "",
      width: ""
    },
    price: "",
    images: ["", ""],
    category: "",
    availability: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("dimensions")) {
      const dimension = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        dimensions: {
          ...prevData.dimensions,
          [dimension]: value
        }
      }));
    } else if (name.includes("images")) {
      const index = parseInt(name.split(".")[1]);
      setFormData((prevData) => {
        const images = [...prevData.images];
        images[index] = value;
        return {
          ...prevData,
          images
        };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formArtist">
        <Form.Label>Artist</Form.Label>
        <Form.Control
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formMaterials">
        <Form.Label>Materials</Form.Label>
        <Form.Control
          type="text"
          name="materials"
          value={formData.materials}
          onChange={handleChange}
        />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group controlId="formHeight">
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="number"
              name="dimensions.height"
              value={formData.dimensions.height}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formWidth">
            <Form.Label>Width</Form.Label>
            <Form.Control
              type="number"
              name="dimensions.width"
              value={formData.dimensions.width}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formImages">
        <Form.Label>Images</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type="text"
              name="images.0"
              placeholder="Image URL 1"
              value={formData.images[0]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="images.1"
              placeholder="Image URL 2"
              value={formData.images[1]}
              onChange={handleChange}
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formAvailability">
        <Form.Label>Availability</Form.Label>
        <Form.Control
          type="text"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
