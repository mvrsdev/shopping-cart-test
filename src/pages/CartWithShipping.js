import styled from 'styled-components';
import { Button, Header, Product, SubTotal } from '../components';
import theme from '../style/theme';
import { Over10, Under10 } from '../mocks/API';

const API = Over10;

const CartContainer = styled.div`
  min-height: 100vh;
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
`;

const ProductsRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const SubTotalRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${theme.borderColor};
  padding: 24px 0;
`;

const CheckoutRow = styled.div`
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
      <ProductsRow>
        <Product
          img={API.items[0].imageUrl}
          title={API.items[0].name}
          price={API.items[0].listPrice / 100}
          discountedPrice={API.items[0].sellingPrice / 100}
        />
      </ProductsRow>
      <SubTotalRow>
        <SubTotal sale={API} />
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
