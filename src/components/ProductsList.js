import styled from 'styled-components';
import Product from './Product';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const ProductsList = ({ products }) => {
  return (
    <ListContainer>
      {products.map((product, index) => (
        <Product
          key={index}
          img={product.imageUrl}
          title={product.name}
          price={product.price}
          sellingPrice={product.sellingPrice}
        />
      ))}
    </ListContainer>
  );
};

export default ProductsList;
