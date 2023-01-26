import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: auto;
  &:last-child {
    background: #000;
  }
`;

export const Main = styled.div`
  padding-left: 50px;
`;