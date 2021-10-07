import React from "react";
import styled from "styled-components";
import { breakpoints } from "../pages/global-style";

const StyledH1 = styled.h1`
  font-size: 48px;
  line-height: 52px;
  font-weight: 700;
  letter-spacing: -1.2px;
  ${breakpoints("font-size", "", [{ 480: "40px" }], "max-width")};
  ${breakpoints("line-height", "", [{ 480: "44px" }], "max-width")};
`;
const StyledH2 = styled.h2`
  font-size: 40px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -1px;
  ${breakpoints("font-size", "", [{ 480: "32px" }], "max-width")};
  ${breakpoints("line-height", "", [{ 480: "36px" }], "max-width")};
`;
const StyledH3 = styled.h3`
  font-size: 32px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -0.8px;
  ${breakpoints("font-size", "", [{ 480: "24px" }], "max-width")};
  ${breakpoints("line-height", "", [{ 480: "28px" }], "max-width")};
`;
const StyledH4 = styled.h4`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  letter-spacing: -0.6px;
  ${breakpoints("font-size", "", [{ 480: "20px" }], "max-width")};
  ${breakpoints("line-height", "", [{ 480: "24px" }], "max-width")};
`;
const StyledH5 = styled.h5`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  ${breakpoints("font-size", "", [{ 480: "18px" }], "max-width")};
  ${breakpoints("line-height", "", [{ 480: "22px" }], "max-width")};
`;
const StyledSubP = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
`;
const StyledBodyP = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: ${(props) => (props.regular ? 400 : 700)};
`;
export function Display(props) {
  return (
    <>
      <StyledH1 {...props}>{props.children}</StyledH1>
    </>
  );
}
export function LargeHeading(props) {
  return (
    <>
      <StyledH2 {...props}>{props.children}</StyledH2>
    </>
  );
}
export function MediumHeading(props) {
  return (
    <>
      <StyledH3 {...props}>{props.children}</StyledH3>
    </>
  );
}
export function SmallHeading(props) {
  return (
    <>
      <StyledH4 {...props}>{props.children}</StyledH4>
    </>
  );
}
export function ExtraSmallHeading(props) {
  return (
    <>
      <StyledH5 {...props}>{props.children}</StyledH5>
    </>
  );
}
export function Subheading(props) {
  return (
    <>
      <StyledSubP {...props}>{props.children}</StyledSubP>
    </>
  );
}
export function MediumBody(props) {
  return (
    <>
      <StyledBodyP {...props}>{props.children}</StyledBodyP>
    </>
  );
}
