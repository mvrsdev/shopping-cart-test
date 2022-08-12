import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  text-align: left;
  ul li {
    text-decoration: none;
    list-style: none;
    color: #4d5156;
    font-size: 14px;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Product = ({img, title, price, discountedPrice}) => (
  <ProductContainer>
    <ul>
      <li>
        {img}
        <DescriptionContainer>
        {title}
        {price}
        {discountedPrice}
        </DescriptionContainer>
      </li>
    </ul>
  </ProductContainer>
);

export default Product;
