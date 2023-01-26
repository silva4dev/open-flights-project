import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
  font-size: 20px;
`;

export const AirlineLogo = styled.div`
  width: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  
  img {
    height: 70px;
    width: 70px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;

export const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`;

export const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`;

