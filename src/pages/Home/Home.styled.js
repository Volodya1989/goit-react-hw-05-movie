import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  margin-left: 100px;
  margin-right: 100px;
`;

export const Span = styled.span`
  margin-right: 20px;
`;

export const StyledList = styled.ul`
  display: inline-block;
  padding: 40px;
  text-align: left;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: transform 0.4s;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 500px;
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: transform 0.4s;

  &:hover {
    transition: transform 0.4s;
    transform: scale(1.05);
    background: linear-gradient(to bottom right, #e8dbfc, #f8f9d2);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 100%;
`;
