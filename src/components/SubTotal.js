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

const SubTotal = ({ value }) => {

  const total = value / 100;

  return (
    <>
      <TotalRow>
        <div>Total</div>
        <div>R$ {total.toFixed(2)}</div>
      </TotalRow>
      {total >= 10 ? <FreeShipping /> : <></>}
    </>
  );
};

export default SubTotal;
