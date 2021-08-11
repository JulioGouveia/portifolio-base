import styled from "styled-components"
import { LogoGit, LogoLinkedin, LogoTwitter } from "../../../theme/img";
import { Text } from "../../foundation/Text";

const ContainerSobre = styled.section`
    padding: 0;
`

ContainerSobre.Texto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    justify-content: center;
    text-align: justify;
`

ContainerSobre.Imagem = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   border: solid 3px;
   border-radius: 300px;
   border-color: ${({ theme }) => theme.colors.borders.main.color};
   width: 300px;
`

ContainerSobre.Contato = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 45px;
    margin: 0 30px;
`

export function WrapperSobre () {
    
    const URL_github = "https://github.com/juliogouveia";
    const URL_linkedin = "https://github.com/juliogouveia";
    const URL_twitter = "https://github.com/juliogouveia";
    
    return (
        <ContainerSobre>
            <ContainerSobre.Texto> 
                <Text tag="h2" variant="title">Sobre mim: </Text>
            </ContainerSobre.Texto>
            <ContainerSobre.Imagem>
                <img src="https://github.com/juliogouveia.png" style={ {borderRadius:'300px'}}></img> 
            </ContainerSobre.Imagem>  
            <ContainerSobre.Contato>
                <a href={URL_github}><LogoGit></LogoGit></a>
                <a href={URL_linkedin}><LogoLinkedin></LogoLinkedin></a>
                <a href={URL_twitter}><LogoTwitter></LogoTwitter></a>
            </ContainerSobre.Contato>
            <ContainerSobre.Texto>
                <Text tag="p" variant="paragraph2">Tenho 26 anos, adoro cozinhar e codar. Atualmente trabalho como Agilista e estudo React nas horas vagas.</Text>
            </ContainerSobre.Texto>
        </ContainerSobre>
    )
}