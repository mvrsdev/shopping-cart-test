import styled from 'styled-components';
import { Button, Header, SubTotal } from '../components';
import theme from '../style/theme';

const CartContainer = styled.div`
  height: 100%;
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
  margin: 48px 24px;

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const CheckoutRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${theme.borderColor};
  padding: 24px 0;
`;

const SubTotalRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${theme.borderColor};
  padding: 24px 0;
`;

const LoginPage = () => (
  <CartContainer>
    <CartBox>
      <Header />
      <main>
        <br />
        <p>oi</p>
        <br />
        <p>oi</p>
        <br />
        <p>oi</p>
        <br />
      </main>
      <SubTotalRow>
        <SubTotal  />
      </SubTotalRow>
      <CheckoutRow>
        <Button>
          <span>Finalizar compra</span>
        </Button>
      </CheckoutRow>
    </CartBox>
  </CartContainer>
);

export default LoginPage;
