import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${theme.COLORS.BACKGROUND_900};
  color: ${theme.COLORS.GRAY_300};
  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;

    color: ${theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${theme.COLORS.GRAY_300};
    }
  
  }

  > svg {
      margin-left: 16px;
    }
`