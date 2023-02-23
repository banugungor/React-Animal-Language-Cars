import Container from "react-bootstrap/esm/Container";
import logo from "../assets/logo/animals-logo.jpg";
import Image from "react-bootstrap/Image";
const Header = () => {
  return (
    <Container className="text-center mt-4">
      <Image src={logo} width="250px"></Image>
      <h1 className="my-2 font-helvatica display-4">Animals</h1>
    </Container>
  );
};

export default Header;
