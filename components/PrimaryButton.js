import React from "react";
import styled from "styled-components";
import { breakpoints } from "../pages/global-style";

const StyledButton = styled.button`
  display: ${(props) => props.display};
  width: 256px;
  height: 48px;
  border-radius: 10px;
  padding: 0;
  background-color: ${(props) =>
    props.disabled
      ? ({ theme }) => theme.colors.grey
      : ({ theme }) => theme.colors.magenta};
  color: ${({ theme }) => theme.colors.light_solid};
  box-shadow: none;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  :hover {
    box-shadow: 0 2px 4px 0 ${({ theme }) => theme.colors.dark_light};
    border: 2px solid ${({ theme }) => theme.colors.ruby};
  }
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  ${breakpoints("width", "", [{ 480: "100%" }], "max-width")};
`;

export default function PrimaryButton(props) {
  const { display, onClick, children } = props;
  return (
    <>
      <StyledButton {...props} display={display} onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
}
