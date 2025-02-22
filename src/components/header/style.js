import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${theme.COLORS.ORANGE};

  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${theme.COLORS.GRAY_100}
    }

    strong {
      font-size: 18px;
      color: ${theme.COLORS.WHITE}
    }

  }

  
`;

export const Logout = styled.button`
  border:none;
  background: none;

  > svg {
    width: 36px;
    height: 36px;
    fill: ${theme.COLORS.GRAY_100};
  }
`
