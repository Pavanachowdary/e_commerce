import React, { useState, useRef } from "react";
import { Form, Button, Container, Card, Alert, Row, Col, InputGroup, Badge, Image, Spinner } from "react-bootstrap";
import { FaSave, FaArrowLeft, FaUpload, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [formData, setFormData] = useState({ name: "", description: "", price: "", category: "", stock: "" });
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
        id: Date.now() + Math.random(),
        preview: URL.createObjectURL(file),
        name: file.name
    }));
    setImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (imageId) => {
    setImages(prev => prev.filter(img => img.id !== imageId));
  };
  
  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        setSuccess('Product "Laptop Pro X" has been successfully added!');
        // Here you would typically redirect or clear the form
    }, 1500);
  };

  return (
    <Container fluid>
      <div className="d-flex align-items-center mb-4">
        <Button as={Link} to="/products" variant="light" className="me-3">
          <FaArrowLeft />
        </Button>
        <h2 className="fw-bold mb-0">Add New Product</h2>
      </div>

      {success && <Alert variant="success">{success}</Alert>}
      
      <Form onSubmit={handleSubmit}>
        <Row className="g-4">
          <Col lg={8}>
            <Card className="shadow-sm">
              <Card.Header className="bg-white"><h5 className="fw-bold mb-0">Product Details</h5></Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Product Name</Form.Label>
                  <Form.Control type="text" placeholder="e.g., Wireless Headphones" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Description</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Add a detailed description..." />
                </Form.Group>
              </Card.Body>
            </Card>
            <Card className="shadow-sm mt-4">
              <Card.Header className="bg-white"><h5 className="fw-bold mb-0">Pricing & Inventory</h5></Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Price</Form.Label>
                      <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type="number" placeholder="0.00" required /></InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Stock Quantity</Form.Label>
                      <Form.Control type="number" placeholder="0" required />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="shadow-sm">
              <Card.Header className="bg-white"><h5 className="fw-bold mb-0">Organization</h5></Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Category</Form.Label>
                  <Form.Select required><option>Select a category...</option><option>Electronics</option><option>Fashion</option></Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="fw-semibold">Tags</Form.Label>
                  <InputGroup className="mb-2">
                    <Form.Control value={currentTag} onChange={e => setCurrentTag(e.target.value)} placeholder="Add a tag..." />
                    <Button variant="outline-secondary" onClick={addTag}><FaPlus /></Button>
                  </InputGroup>
                  <div className="d-flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <Badge key={tag} pill bg="primary" className="d-flex align-items-center">
                        {tag} <FaTimes className="ms-1" style={{cursor:'pointer'}} onClick={() => removeTag(tag)} />
                      </Badge>
                    ))}
                  </div>
                </Form.Group>
              </Card.Body>
            </Card>
             <Card className="shadow-sm mt-4">
              <Card.Header className="bg-white"><h5 className="fw-bold mb-0">Product Images</h5></Card.Header>
              <Card.Body>
                <div className="border border-2 border-dashed rounded p-4 text-center mb-3" onClick={() => fileInputRef.current?.click()} style={{cursor:'pointer'}}>
                   <FaUpload size={24} className="text-muted mb-2"/>
                   <p className="mb-0 text-muted small">Click to upload or drag & drop</p>
                </div>
                 <input type="file" ref={fileInputRef} onChange={handleImageUpload} multiple hidden accept="image/*" />
                 <Row className="g-2">
                    {images.map(img => (
                        <Col xs={4} key={img.id}>
                            <div className="position-relative">
                                <Image src={img.preview} thumbnail />
                                <Button variant="danger" size="sm" className="position-absolute top-0 end-0 rounded-circle" style={{transform:'translate(50%, -50%)'}} onClick={() => removeImage(img.id)}><FaTrash /></Button>
                            </div>
                        </Col>
                    ))}
                 </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mt-4 d-flex justify-content-end gap-2">
            <Button variant="secondary" as={Link} to="/products">Cancel</Button>
            <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? <Spinner as="span" animation="border" size="sm" /> : <><FaSave className="me-2" />Add Product</>}
            </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddProduct;