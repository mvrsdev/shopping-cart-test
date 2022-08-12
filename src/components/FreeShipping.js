import styled from 'styled-components';
import theme from '../style/theme';

const ShippingRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px;
  margin-top: 24px;
  width: 75%;
  background-color: ${theme.freeShippingBackground};
  color: ${theme.freeShippingText};
  border-radius: 16px;
  font-weight: 600;
`;

const FreeShipping = () => (
  <ShippingRow>
    <div>
      <span style={{ paddingRight:4 }} >Parabéns, sua compra</span>
    </div>
    <div>
      <span>tem frete grátis!</span>
    </div>
  </ShippingRow>
);

export default FreeShipping;
