import { useState } from "react";
import Card from "react-bootstrap/Card";

const WordCard = ({ english, img, turkish }) => {
  // const {english, img, turkish}
  const [showImage, setShowImage] = useState(true);
  const handleClick = () => {
    setShowImage(!showImage);
  };
  return (
    <Card
      onClick={handleClick}
      className="rounded-2 m-auto animal-card "
      role="button"
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="card-logo " />
      ) : (
        <ul className="p-0 m-auto">
          <li className="h5 list-unstyled">{turkish}</li>{" "}
        </ul>
      )}
      <Card.Footer>
        <Card.Title className="m-auto text-center">{english} </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default WordCard;
