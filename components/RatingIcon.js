import React, { useMemo, useState } from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.checked ? "orange" : "unset")};
  flex-grow: 1;
`;

export default function RatingIcon(props) {
  const [checked, setChecked] = useState(false);

  const { index, rating, hoverRating, onMouseEnter, onMouseLeave, onClick } =
    props;

  useMemo(() => {
    if (hoverRating >= index) {
      return setChecked(true);
    } else if (!hoverRating && rating >= index) {
      return setChecked(true);
    }
    return setChecked(false);
  }, [rating, hoverRating, index]);

  return (
    <>
      <StyledSpan
        {...props}
        title={"Avaliar serasa com nota " + index}
        tabIndex={0}
        className="rate fa fa-star"
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={() => onMouseLeave()}
        onClick={() => onClick(index)}
        checked={index === 1 ? true : checked}
      ></StyledSpan>
    </>
  );
}
