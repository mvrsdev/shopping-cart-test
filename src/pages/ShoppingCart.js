import styled from 'styled-components';
import { Button, Header, SubTotal, ProductsList } from '../components';
import theme from '../style/theme';
import { getFreeShippingCart, getStandardCart } from '../api/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

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

const ShoppingCart = () => {
  const [cart, setCart] = useState(null);
  const [type] = useSearchParams();
  useEffect(() => {
    if (type.get('type') === 'free') {
      getFreeShippingCart().then((cartResponse) => setCart(cartResponse));
    } else {
      getStandardCart().then((cartResponse) => setCart(cartResponse));
    }
  }, [type]);

  return (
    <CartContainer>
      <CartBox>
        <Header />
        {cart ? (
          <>
            <ProductsList products={cart.items} />
            <SubTotalRow>
              <SubTotal value={cart.value} />
            </SubTotalRow>
          </>
        ) : (
          <></>
        )}
        <CheckoutRow>
          <Button>Finalizar compra</Button>
        </CheckoutRow>
      </CartBox>
    </CartContainer>
  );
};

export default ShoppingCart;
