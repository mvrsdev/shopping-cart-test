import styled from 'styled-components';
import FreeShipping from './FreeShipping';

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  font-size: 24px;
  font-weight: 900;
`;

const SubTotal = ({ freeShippingOn }) => {
  const renderFreeShipping = () => <FreeShipping />;

  return (
    <>
      <TotalRow>
        <div>Total</div>
        <div>R$ 13,31</div>
      </TotalRow>
      {freeShippingOn ? renderFreeShipping() : undefined}
    </>
  );
};

export default SubTotal;
