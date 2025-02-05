import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  padding:0 16px;
  margin-top: 16px;
  text-transform: uppercase;
  border-radius: 10px;
  font-weight: 900;
  font-size: 14px;
  background-color:${theme.COLORS.ORANGE};
  color:${theme.COLORS.BACKGROUND_800};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
