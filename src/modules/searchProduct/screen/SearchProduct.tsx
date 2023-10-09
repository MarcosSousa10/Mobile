/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import Text from '../../../shared/components/text/Text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { MethodEnum } from '../../../enums/methods.enum';
import { useProductReducer } from '../../../story/reducers/productReducer/useProductReducer';
import { PaginationType } from '../../../shared/types/paginationType';
import { ProductType } from '../../../shared/types/productType';
import { URL_PRODUCT_PAGE } from '../../../shared/constants/urls';
export type SearchProductNavigationProp = NativeStackNavigationProp<Record<string, SearchProductParams>>;
export interface SearchProductParams{
  search?: string;
}
const SearchProduct = () => {
  const {searchProducts, setSearchProducts } = useProductReducer();
  const {params} = useRoute<RouteProp<Record<string,SearchProductParams >>>();
  const {search} = params;
  const {request} = useRequest();
  useEffect(() => {
    request<PaginationType<ProductType[]>>({
      url: `${URL_PRODUCT_PAGE}?search=${search}`,
      method: MethodEnum.GET,
      saveGlobal:setSearchProducts,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
console.log(searchProducts?.data);
  return (
    <>
    {searchProducts && ( 
    <Text>tem Produto</Text>
    )}
    <Text>Qualquer coisa</Text>
    </>
  );
};
export default SearchProduct;
