import styled from 'styled-components';
import theme from '../style/theme';

const HeaderRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 24px;
  font-size: 24px;
  font-weight: 900;
  width: 100%;
  border-bottom: 1px solid ${theme.borderColor};
  padding: 24px 0 ;
`;

const Header = () => (
  <HeaderRow>
    <span>Meu carrinho</span>
  </HeaderRow>
);

export default Header;
