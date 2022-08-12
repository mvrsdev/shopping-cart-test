import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import theme from '../style/theme';

const CartContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.background};
`;

const CartBox = styled.div`
  box-sizing: border-box;
  border: 1px solid ${theme.borderColor};
  border-radius: 16px;
  width: 500px;
  min-height: 500px;
  background: ${theme.backgroundBox};
  box-shadow: 0 0 32px 8px #dadce0;
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    flex-grow: 1;
  }
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${theme.borderColor};
  padding: 24px 0;
`; 

const LoginPage = () => (
  <CartContainer>
    <CartBox>
      <Header />
      <main></main>
      <FooterRow>
        <Button><span>Finalizar compra</span></Button>
      </FooterRow>
    </CartBox>
  </CartContainer>
);

export default LoginPage;
