import React from "react";
import styled from "styled-components";
import { MediumHeading, MediumBody } from "./Headings";
import { breakpoints } from "../pages/global-style";
import PrimaryButton from "./PrimaryButton";

export default function AfterSending(props) {
  const { value } = props;

  const StyledDivContent = styled.div`
    display: ${(props) => props.display};
    flex-direction: column;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors.light_solid};
    margin: auto;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    width: 90%;
    height: 300px;
    max-width: 400px;
    border-radius: 10px;
    ${breakpoints("width", "", [{ 480: "70%" }], "max-width")};
  `;

  const StyledDivButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${breakpoints("justify-content", "", [{ 480: "right" }], "max-width")};
  `;

  return (
    <>
      <StyledDivContent {...props}>
        <MediumHeading>
          {value
            ? "Obrigado por nos avaliar! :D"
            : "Oh não, houve algum problema :C"}
        </MediumHeading>
        {!value && (
          <MediumBody regular>
            Mas não se preocupe, nosso time está trabalhando nisso e você poderá
            avaliar novamente mais tarde!
          </MediumBody>
        )}
        <StyledDivButton>
          <PrimaryButton
            onClick={() => {
              window.location.reload(true);
            }}
          >
            Voltar para o começo
          </PrimaryButton>
        </StyledDivButton>
      </StyledDivContent>
    </>
  );
}
