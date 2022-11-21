import styled from "styled-components";

export const NumerosSorteadosStyle = styled.div`
  font-family: 'Tahoma';
  font-size: 20px;
  font-weight: bold;

  .size-x {
    height: 60px;
    width: 60px;
  }

  .circle {
    background:  ${props => props.theme.colors.backgroundCirculo};;
    color:  ${props => props.theme.colors.colorDezena};
    border-radius: 50%;  
    align-items: center;
    display: inline-flex;
    justify-content: center;
    margin: 8px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;