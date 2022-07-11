import "./App.css";
import styled, { keyframes, Keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vw;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const BigFather = styled.div``;

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;
const Btn = styled.button`
  color: white;
  background-color: teal;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

const animation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    transform:rotate(360deg);
    border-radius:100px;
  }
  100%{
    transform:rotate(0deg);
    border-radius:0px;
  }
`;
const Emoji = styled.span`
  font-size: 30px;
`;

const AnimaBox = styled(Box)`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  span {
    font-size: 55px;
    &:hover {
      font-size: 88px;
    }
    &:active {
      opacity: 0;
    }
  }
  ${Emoji}:hover {
    font-size: 88px;
  }
`;

function App() {
  return (
    <Wrapper>
      <BigFather>
        <Title>Hello</Title>

        <Father as="header">
          <Box bgColor="teal">
            <Text>Hello</Text>
          </Box>
          <Circle bgColor="tomato">
            <Btn as="a" href="/">
              Click Me
            </Btn>
          </Circle>
        </Father>
        <Father>
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
        </Father>
        <Father>
          <AnimaBox>
            <span>😊</span>
            <Emoji as="div">💕</Emoji>
          </AnimaBox>
          <Emoji as="div">😁</Emoji>
        </Father>
      </BigFather>
    </Wrapper>
  );
}

export default App;
