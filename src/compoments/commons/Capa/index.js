import styled, { css } from "styled-components";
import { ImagemCapa } from "../../../theme/img";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";
import { Text } from "../../foundation/Text";

const CapaWrapper = styled.div`
    text-align: center;
    width: 100%;
    height: 50%;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.colors.borders.main.color};
    padding: 3rem;

    ${breakpointsMedia({
        lg: css`
            padding: 10rem;
             min-height: 980px;
        `
    })}
   
`

export default function Capa () {
     const nomePortifolio = "Julio Gouveia";
    
    return (
     
        <CapaWrapper>
            <ImagemCapa src="/whatw-png.png" ></ImagemCapa>
            <Text variant="titleXL" tag="h1">{nomePortifolio} </Text>
        </CapaWrapper>
      
    )
} 
