import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const StyledText = styled.div`
  display: flex;
  gap: 10px;
`;
export const StyledGenresTitle = styled.h4`
  margin: 0;
`;
export const StyledDetails = styled.div`
  display: flex;
  gap: 50px;
  padding-bottom: 10px;
  border-bottom: 1px solid #888;
`;
export const StyledList = styled.ul`
  list-style: none;
  padding-bottom: 10px;
  border-bottom: 1px solid #888;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 100px;

  cursor: pointer;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  border-radius: 6px;
  border: none;

  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-bottom: 10px;

  &:focus {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
      0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
`;

export const Container = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`;
