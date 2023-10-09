/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Text from '../../../shared/components/text/Text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { MethodEnum } from '../../../enums/methods.enum';
import { useProductReducer } from '../../../story/reducers/productReducer/useProductReducer';
import { PaginationType } from '../../../shared/types/paginationType';
import { ProductType } from '../../../shared/types/productType';
import { URL_PRODUCT_PAGE } from '../../../shared/constants/urls';
import Input from '../../../shared/components/input/input';
import { NativeSyntheticEvent, ScrollView, TextInputChangeEventData } from 'react-native';
import ProductThumbnail from '../../../shared/components/productThumbnail/ProductThumbnail';
export type SearchProductNavigationProp = NativeStackNavigationProp<Record<string, SearchProductParams>>;
export interface SearchProductParams{
  search?: string;
}
const SearchProduct = () => {
  const {searchProducts, setSearchProducts } = useProductReducer();
  const {params} = useRoute<RouteProp<Record<string,SearchProductParams >>>();
  // const {search} = params;
  const [value, setValue] = useState(params?.search || '');

  const {request} = useRequest();
  useEffect(() => {
 return setValue(params?.search || '');
  }, [params]);
  useEffect(() => {
    if (value)  {
      request<PaginationType<ProductType[]>>({
      url: `${URL_PRODUCT_PAGE}?search=${value}`,
      method: MethodEnum.GET,
      saveGlobal:setSearchProducts,
    });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const handleOnChangeinput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(event.nativeEvent.text);
  };
console.log(searchProducts);
  return (
    <>
    <Input onChange={handleOnChangeinput} value={value}  iconRight='search'/>
    {searchProducts && searchProducts.data && ( 
    <ScrollView>{searchProducts.data.map((product) => <ProductThumbnail product={product}/>)}</ScrollView>
    )}
    <Text>Qualquer coisa</Text>
    </>
  );
};
export default SearchProduct;
