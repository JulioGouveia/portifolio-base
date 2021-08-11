import { Text } from "../../foundation/Text";
import { MenuWrapper } from "./styles/MenuWrapper";

export default function Menu () {

    const links = [
          {
              texto: '<Me/>',
              url:  '/'
          },
          {
              texto: '<Contato/>',
              url:  '/contato'
          },
          {
              texto: '<Projetos/>',
              url:  '/projetos'
          }
      ];
    
      return (
      <MenuWrapper>
        <MenuWrapper.RightSide as="ul">
          {
              links.map((link) => {
                  return (
                  <li key={link.url}>
                      <Text tag="a" variant="smallestException1" href={link.url}>
                          {link.texto}
                      </Text>
                  </li>
                  )
              })
          }
        </MenuWrapper.RightSide>
      </MenuWrapper>
      )
  }