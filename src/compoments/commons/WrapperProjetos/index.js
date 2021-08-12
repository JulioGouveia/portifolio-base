import styled, { css } from "styled-components"
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia"
import { Text } from "../../foundation/Text"
import { Card } from "../Card"

const ContainerProjetos = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    ${breakpointsMedia({
        lg: css`
            flex-direction: row;
            margin: 0 auto;
            
        `
    })}

`

export function WrapperProjetos ({card}) {
    return (
        <>
        <Text tag="h2" variant="title"  style={{ textAlign: 'center'}}> Projetos </Text>
        <ContainerProjetos>
            {card.map((card) => {
                    return (
                        <Card key={card.title}>
                            <Card.Img src={card.img}>
                            </Card.Img>
                            <Card.Title>
                                <Text tag="a" href={card.href} variant="title"> {card.title}</Text>
                            </Card.Title>
                        </Card>   
                        )
                })
            }
        </ContainerProjetos>
        </>
        
    )
}