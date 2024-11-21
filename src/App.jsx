//import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";

// Styled Components
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 40px;
`;


function App() {
  return (
    <Main>
      <Header />
      <Section>
        {contents.map((el) => {
            console.log(el.id); // id 값을 확인하여 중복이 있는지 체크
            return <Content key={el.id} content={el} />;
          })}
      </Section>
    </Main>
  );
}

export default App;
