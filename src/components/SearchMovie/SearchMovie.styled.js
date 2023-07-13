import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Input = styled.input`
  display: inline-block;
  border: 2px solid gray;

  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const ButtonStyled = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const Container = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
`;
