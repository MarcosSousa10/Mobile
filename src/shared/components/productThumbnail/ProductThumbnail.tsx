/* eslint-disable prettier/prettier */
import React from 'react';
import {ProductImage, ProductThumbernailContainer} from './productThumbnail.style';
import { ProductType } from '../../types/productType';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/theme';
import Button from '../button/Button';
interface ProductThumbnailProps {
    product: ProductType;
    margin?: string;
}
export const ProductThumbnail = ({ product,margin }: ProductThumbnailProps) => {
  return (
  <ProductThumbernailContainer margin={margin}>
    <ProductImage source={{ uri: product.image }}/>
    <Text
    type={textTypes.PARAGRAPH_SMALL_REGULAR}>
        {product.name}
        </Text>
        <Text 
        type={textTypes.BUTTON_SEMI_BOLD} 
        color={theme.colors.mainTheme.primary}
        >{
        product.price}
        </Text>
        <Button title='Inserir'></Button>
  </ProductThumbernailContainer>
  );
};
export default ProductThumbnail;
