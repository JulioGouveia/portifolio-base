import styled, { css } from "styled-components";
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const MenuWrapper = styled.nav`
    
    padding-left: 28px;
    padding-right: 28px;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.colors.borders.main.color};

    ${breakpointsMedia({
        lg: css`
            margin: 0 450px;
        `
    })}

`

MenuWrapper.RightSide = styled.div`
    display: flex;
    justify-content: space-between;
        
    li {
        list-style-type: none;
        padding: 0 40px;
    }

    a {
        text-decoration: none;
        color: black;
        transition: 200ms ease-in-out;
          &:hover,
          &:focus {
              font-weight: 500;
              color: #7B68EE;
          } 
    }
`
