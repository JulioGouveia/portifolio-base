import styled from "styled-components"

export const Card = styled.div`
    border-radius: 3px;
    border-style: solid;
    border-color:  ${({ theme }) => theme.colors.borders.main.color};
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
Card.Img = styled.div`
    background-image: url('${(props) => props.src}');
    margin: 3px;
    width: 400px;
    height: 400px;
`


Card.Title = styled.div`
    padding: 30px;
    a{
        text-decoration: none;
        color: black;
        font-weight: 400;
        transition: 200ms ease-in-out;
          &:hover,
          &:focus {
              font-weight: 500;
              color: ${({ theme }) => theme.colors.borders.main.color};
          } 
    }

`