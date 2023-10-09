/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier *//* eslint-disable react-hooks/exhaustive-deps */
import Text from '../../../shared/components/text/Text';
import { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import React = require('react');
import { useProductReducer } from '../../../story/reducers/productReducer/useProductReducer';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';
import { ProductType } from '../../../shared/types/productType';

import ProductThumbnail from '../../../shared/components/productThumbnail/ProductThumbnail';

const Home = () => {
  // const {navigate} = useNavigation<ProductNavigationProp>();
  const {request} = useRequest();
const {products, setProducts} = useProductReducer();
useEffect(() => {
    request<ProductType[]>({
      url: URL_PRODUCT,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
    console.log(products);
}, []);
// const handlGoToProduct = (product: ProductType)=>{
//   navigate(MenuUrl.PRODUCT,{
//     product,
//   });
// };
 return (
    <View>
      <Text>
    Home
    </Text>
    <FlatList 
    horizontal
    data={products} 
    renderItem={({item}) => <ProductThumbnail margin='0px 8px' product={item}/> }/>
    {/* {products.map((product)=> (    
    <TouchableOpacity onPress={()=>handlGoToProduct(product)}><Text>{product.name}</Text></TouchableOpacity>
    ))} */}
    </View>
);
};
export default Home;
