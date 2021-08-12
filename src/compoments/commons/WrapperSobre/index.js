import styled, { css } from "styled-components"
import { LogoGit, LogoLinkedin, LogoTwitter } from "../../../theme/img";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";
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
   width: 300px;
   height: 300px;
   background-image: url("https://github.com/juliogouveia.png");
   background-repeat: round;
   border: solid 3px;
   border-radius: 300px;
   border-color: ${({ theme }) => theme.colors.borders.main.color};
`

ContainerSobre.Contato = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 45px;
    margin: 0 60px;

    ${breakpointsMedia({
        lg: css`
            margin: 0 700px;
        `
    })}

`

export function WrapperSobre () {
    
    const URL_github = "https://github.com/juliogouveia";
    const URL_linkedin = "https://www.linkedin.com/in/juliogouveia23/";
    const URL_twitter = "https://twitter.com/JulioGouveia11";
    
    return (
        <ContainerSobre>
            <ContainerSobre.Texto> 
                <Text tag="h2" variant="title">Sobre mim: </Text>
            </ContainerSobre.Texto>
            <ContainerSobre.Imagem>
               
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