import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;
const StyledInput = styled.input`
  height: 48px;
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.black_russian};
  padding: 8px;
  box-sizing: border-box;
  :hover,
  :focus {
    border: solid 1px ${({ theme }) => theme.colors.navy_blue};
  }
`;

export default function TextInput(props) {
  const { label, textInputValue } = props;
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    textInputValue(inputValue);
  }, [inputValue]);

  return (
    <>
      <div className="form-group">
        <StyledLabel htmlFor="textInput">{label}</StyledLabel>
        <StyledInput
          {...props}
          type="text"
          id="textInput"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value.replace(/[0-9]/g, ""));
          }}
          required
        />
      </div>
    </>
  );
}
