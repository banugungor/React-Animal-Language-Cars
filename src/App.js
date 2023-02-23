import Container from "react-bootstrap/Container";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import WordsCard from "./components/WordsCard";

function App() {
  return (
    <Container>
      <Header />
      <CardContainer />
      {/* <WordsCard /> */}
    </Container>
  );
}

export default App;
