import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../pages/global-style";

const StyledLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;
const StyledTextarea = styled.textarea`
  height: 48px;
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.black_russian};
  padding: 8px;
  box-sizing: border-box;
  max-width: 400px;
  max-height: 130px;
  min-width: 400px;
  min-height: 48px;
  :hover,
  :focus {
    border: solid 1px ${({ theme }) => theme.colors.navy_blue};
  }
  ${breakpoints("max-width", "", [{ 480: "auto" }], "max-width")};
  ${breakpoints("min-width", "", [{ 480: "221px" }], "max-width")};
`;

export default function MessageInput(props) {
  const { label, messageInputValue } = props;
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    messageInputValue(inputValue);
  }, [inputValue]);

  return (
    <>
      <div className="form-group">
        <StyledLabel htmlFor="messageInput">{label}</StyledLabel>
        <StyledTextarea
          {...props}
          type="text"
          id="messageInput"
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
      </div>
    </>
  );
}
