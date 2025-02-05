import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-columns: 250px auto;
grid-template-rows: 105px 128px auto 64px;
grid-template-areas: 
"brand header"
"menu search"
"menu content"
"newnote content";

background-color: ${theme.COLORS.BACKGROUND_800};

`;
export const Brand = styled.div`
grid-area: brand;
display: flex;
justify-content: center;
align-items: center;

border-right-width: 1px;
border-right-style: solid;
border-right-color: ${theme.COLORS.BACKGROUND_700};

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${theme.COLORS.ORANGE};

background-color: ${theme.COLORS.BACKGROUND_900};
color: ${theme.COLORS.ORANGE};
text-transform: uppercase;

> h1 {
  font-size: 18px;
  font-weight: bold;
}
`
export const Menu = styled.ul`
grid-area: menu;
background-color: ${theme.COLORS.BACKGROUND_900};

border-right-width: 1px;
border-right-style: solid;
border-right-color: ${theme.COLORS.BACKGROUND_700};
padding-top: 64px;
text-align: center;

> li {
  margin-bottom: 24px;
}

`
export const Search = styled.div`
grid-area: search;
padding: 64px 64px 0;

`
export const Content = styled.div`
grid-area: content;
padding: 0 64px;
overflow-y: scroll;
`
export const NewNote = styled.button`
grid-area: newnote;
background-color: ${theme.COLORS.ORANGE};
display: flex;

border: none;

display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
text-transform: uppercase;

> svg {
  font-size: 24px;
  font-weight: bold;
  margin-right: 8px;
}

`