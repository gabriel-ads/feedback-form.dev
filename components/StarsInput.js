import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RatingIcon from "./RatingIcon";

const StyledSpan = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
`;
const StyledDivRating = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 32px;
`;

export default function StarsInput(props) {
  const { label, starsInputValue } = props;
  const [rating, setRating] = useState(1);
  const [hoverRating, setHoverRating] = useState(1);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onClick = (index) => {
    setRating(index);
  };

  useEffect(() => {
    starsInputValue(rating);
  }, [rating]);

  return (
    <>
      <div className="form-group">
        <StyledSpan {...props} htmlFor="startInput">
          {label}
        </StyledSpan>
        <StyledDivRating id="startInput">
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <RatingIcon
                key={index}
                index={index}
                rating={rating}
                hoverRating={hoverRating}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
              />
            );
          })}
        </StyledDivRating>
      </div>
    </>
  );
}
