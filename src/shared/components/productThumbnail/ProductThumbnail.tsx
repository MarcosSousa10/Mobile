/* eslint-disable prettier/prettier */
import React from 'react';
import {ProductImage, ProductInsertCart, ProductThumbernailContainer} from './productThumbnail.style';
import { ProductType } from '../../types/productType';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/theme';
import { convertnumbertomoney } from '../../functions/money';
import { useNavigation } from '@react-navigation/native';
import { ProductNavigationProp } from '../../../modules/product/screens/product';
import { MenuUrl } from '../../enums/MenuUrl.wnum';
import { Icon } from '../icon/Icon';
interface ProductThumbnailProps {
    product: ProductType;
    margin?: string;
}
export const ProductThumbnail = ({ product,margin }: ProductThumbnailProps) => {
   const {navigate} = useNavigation<ProductNavigationProp>();
   const handleGoToProduct = () =>{
    navigate(MenuUrl.PRODUCT,{
        product,
    });
   };
  return (
  <ProductThumbernailContainer onPress={handleGoToProduct} margin={margin}>
    <ProductImage source={{ uri: product.image }}/>
    <Text
    type={textTypes.PARAGRAPH_SMALL_REGULAR}>
        {product.name}
        </Text>
        <Text
        type={textTypes.BUTTON_SEMI_BOLD}
        color={theme.colors.mainTheme.primary}
        >
        {convertnumbertomoney(product.price)}
        </Text>
        <ProductInsertCart>
            <Icon name='cart' color={theme.colors.neutraTheme.white} />
        </ProductInsertCart>
  </ProductThumbernailContainer>
  );
};
export default ProductThumbnail;
