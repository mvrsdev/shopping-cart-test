import styled, { css } from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  text-align: left;
  padding: 16px;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const ProductTitle = styled.h3`
  margin: 8px 0;
  font-size: 0.9rem;
`;

const ProductImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.theme.borderColor};
`;

const Pricing = styled.p`
  margin: 0 0 8px 0;
  font-weight: 600;
  ${(props) =>
    props.listingPrice &&
    css`
      color: ${(props) => props.theme.disabledColorText};
      font-size: 0.825rem;
      margin-bottom: 0;
    `}
`;

const Product = ({ img, title, price, sellingPrice }) => {

  return (
    <ProductContainer>
      <ProductImg src={img} alt="Imagem do Produto" />
      <DescriptionContainer>
        <ProductTitle>{title}</ProductTitle>
        <Pricing price>{price / 100}</Pricing>
        <Pricing>{sellingPrice / 100}</Pricing>
      </DescriptionContainer>
    </ProductContainer>
  );
};

export default Product;
