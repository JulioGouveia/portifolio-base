import styled from "styled-components";
import { Text } from "../../foundation/Text";

const FooterWraper = styled.footer`
    background-color: ${({theme}) => theme.colors.borders.main.color};
    color: white;
    text-align: center;
    margin-top: 30px;
`

export function Footer() {
    return (
    <FooterWraper>
      <Text tag="p" variant="paragraph1">copyright &#169; 2021 - Julio Gouveia</Text>  
    </FooterWraper>)
}