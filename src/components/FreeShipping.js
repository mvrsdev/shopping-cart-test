import styled from 'styled-components';

const ShippingRow = styled.div`
  text-align: center;
  padding: 12px 16px;
  margin-top: 24px;
  width: 75%;
  background-color: ${(props) => props.theme.freeShippingBackground};
  color: ${(props) => props.theme.freeShippingText};
  border-radius: 2rem;
  font-weight: 600;
`;

const FreeShipping = () => (
  <ShippingRow>
    Parabéns, sua compra tem frete grátis!
  </ShippingRow>
);

export default FreeShipping;
