import React, { useState } from "react";
import { LargeHeading } from "./Headings";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import StarsInput from "./StarsInput";
import MessageInput from "./MessageInput";
import styled from "styled-components";
import { breakpoints } from "../pages/global-style";
import sendFeedback from "../services/sendFeedback";
import AfterSending from "./AfterSending";

const StyledForm = styled.form`
  display: ${(props) => props.displayForm};
  justify-content: center;
  align-items: center;
`;

const StyledDivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.light_solid};
  margin: auto;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  width: 90%;
  height: 420px;
  max-width: 400px;
  border-radius: 10px;
  ${breakpoints("width", "", [{ 480: "70%" }], "max-width")};
`;
const StyledFormHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledCloseSpan = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  float: right;
  font-size: 28px;
  font-weight: bold;
  align-self: center;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.dark_high};
    text-decoration: none;
    cursor: pointer;
  }
`;

const StyledDivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${breakpoints("justify-content", "", [{ 480: "right" }], "max-width")};
`;

export default function Form() {
  const [displayPrimaryButton, setDisplayPrimaryButton] = useState("block");
  const [displayForm, setDisplayForm] = useState("none");
  const [displayAfterSending, setDisplayAfterSending] = useState("none");
  const [textInput, setTextInput] = useState("");
  const [starsInput, setStarsInput] = useState(1);
  const [messageInput, setMessageInput] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [sentWithSuccess, setSentWithSuccess] = useState(false);

  const textInputValue = (index) => {
    setTextInput(index);
  };
  const starsInputValue = (index) => {
    setStarsInput(index);
  };
  const messageInputValue = (index) => {
    setMessageInput(index);
  };

  return (
    <>
      <PrimaryButton
        display={displayPrimaryButton}
        onClick={() => {
          setDisplayPrimaryButton("none");
          setDisplayForm("flex");
        }}
      >
        Iniciar
      </PrimaryButton>

      <StyledForm
        displayForm={displayForm}
        onSubmit={(e) => e.preventDefault()}
      >
        <StyledDivContent>
          <StyledFormHeaderDiv>
            <LargeHeading tabIndex={0}>Deixe seu feedback</LargeHeading>
            <StyledCloseSpan
              title={"Fechar formulário de feedback"}
              tabIndex={0}
              onClick={() => {
                setDisplayPrimaryButton("block");
                setDisplayForm("none");
              }}
              className="fas fa-times fa fa-rate "
            ></StyledCloseSpan>
          </StyledFormHeaderDiv>
          <TextInput
            textInputValue={textInputValue}
            tabIndex={0}
            label={"Seu Nome:"}
          />
          <StarsInput
            starsInputValue={starsInputValue}
            tabIndex={0}
            label={"Sua Nota:"}
          />
          <MessageInput
            messageInputValue={messageInputValue}
            tabIndex={0}
            label={"Sua Mensagem:"}
          />
          <StyledDivButton>
            <PrimaryButton
              disabled={disabled}
              tabIndex={0}
              display={"block"}
              onClick={() => {
                if (textInput !== "" && messageInput !== "") {
                  setDisabled(true);
                  sendFeedback(textInput, starsInput, messageInput)
                    .then(() => {
                      setDisplayForm("none");
                      setDisplayAfterSending("flex");
                      setSentWithSuccess(true);
                    })
                    .catch((error) => {
                      setDisplayAfterSending("flex");
                      setDisplayForm("none");
                    });
                }
              }}
            >
              Enviar
            </PrimaryButton>
          </StyledDivButton>
        </StyledDivContent>
      </StyledForm>
      <AfterSending display={displayAfterSending} value={sentWithSuccess} />
    </>
  );
}
