import styled from 'styled-components';
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
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 16px;
  width: 500px;
  min-height: 500px;
  background: ${theme.backgroundBox};
  box-shadow: 0 0 32px 8px #dadce0;
`;

// h1 {
//   color: #202124;
//   padding-bottom: 0;
//   font-size: 24px;
//   font-weight: 500;
// }

const LoginPage = () => (
  <CartContainer>
    <CartBox>

    </CartBox>
  </CartContainer>
);

export default LoginPage;
