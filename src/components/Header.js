import styled from 'styled-components';
import theme from '../style/theme';

const HeaderRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 24px;
  width: 100%;
  border-bottom: 1px solid ${theme.borderColor};
`;

const Header = () => (
  <HeaderRow>
    <h2>Meu carrinho</h2>
  </HeaderRow>
);

export default Header;
