import Container from "react-bootstrap/esm/Container";
import { data } from "./../utils/data.js";
import WordCard from "./WordsCard.jsx";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Form.Control
        placeholder="Search animal"
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((data) =>
              data.english.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((data, i) => {
              return (
                <Col md={6} l={4} xl={3} key={i}>
                  <WordCard {...data} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
