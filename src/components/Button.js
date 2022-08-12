import styled from 'styled-components';

const Button = styled.button`
  transition: all 190ms;
  min-height: 64px;
  width: 90%;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -1px;
  padding: 0 16px;
  cursor: pointer;
  user-select: none;
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.buttonColorText};
  border: 1px solid ${(props) => props.theme.buttonColor};

  &:hover {
    border: 1px solid ${(props) => props.theme.buttonColor};
    filter: brightness(105%);
    box-shadow: 0 1px 2px 0 rgb(66 133 244 / 30%),
      0 1px 3px 1px rgb(66 133 244 / 15%);
  }

  &:active {
    filter: brightness(85%);
  }
`;

export default Button;
