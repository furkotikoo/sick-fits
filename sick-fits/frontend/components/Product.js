import PropTypes from 'prop-types';
import ItemStyles from './styles/ItemStyles';
import TitleStyles from './styles/Title';
import PriceTagStyles from './styles/PriceTag';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
const Product = ({ product }) => {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <TitleStyles>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </TitleStyles>
      <PriceTagStyles>{formatMoney(product.price)}</PriceTagStyles>
      <p>{product.description}</p>
      {/*TODO Add buttons to delete and add items*/}
      <div className="buttonList">
        <Link href={{ pathname: '/update', query: { id: product.id } }}>Edit</Link>
        <AddToCart productId={product.id} />
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
};

Product.propTypes = {
  children: PropTypes.any,
  product: PropTypes.any,
};

export default Product;
