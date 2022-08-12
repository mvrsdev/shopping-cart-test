import styled from 'styled-components';

const ShippingRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px;
  margin-top: 24px;
  width: 75%;
  background-color: #c0ff9c;
  color: #1e6f00;
  border-radius: 16px;
  font-weight: 600;
`;

const FreeShipping = () => (
  <ShippingRow>
    <span>Parabéns, sua compra tem frete grátis!</span>
    {/* <div>
      <span>Parabéns, sua compra</span>
    </div>
    <div>
      <span>tem frete grátis!</span>
    </div> */}
  </ShippingRow>
);

export default FreeShipping;
