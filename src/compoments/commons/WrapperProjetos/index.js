import styled from "styled-components"
import { Text } from "../../foundation/Text"
import { Card } from "../Card"



const ContainerProjetos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function WrapperProjetos ({card}) {
    return (
        <ContainerProjetos>
            <Text tag="h2" variant="title" > Projetos </Text>
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
    )
}