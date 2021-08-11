import styled from 'styled-components'
import Menu from '../src/compoments/commons/Cabecalho'
import Capa from '../src/compoments/commons/Capa'
import { Footer } from '../src/compoments/commons/Footer'
import { WrapperProjetos } from '../src/compoments/commons/WrapperProjetos'
import { WrapperSobre } from '../src/compoments/commons/WrapperSobre'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {

  const card = [
    {
      title: 'Alurakut', 
      img: 'https://via.placeholder.com/400',
      href: 'https://alurakut-pearl-three.vercel.app/'
    },{
      title: 'Instalura', 
      img: 'https://via.placeholder.com/400',
      href: 'https://instalura-base-six-sigma.vercel.app/'
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
        <Capa/>
        <Menu/>
        <WrapperSobre></WrapperSobre>
        <WrapperProjetos card={card}></WrapperProjetos>
        <Footer/>
     </div>
    ) 
}
