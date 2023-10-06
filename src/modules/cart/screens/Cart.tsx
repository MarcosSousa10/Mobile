/* eslint-disable react-hooks/exhaustive-deps *//* eslint-disable prettier/prettier */
import React = require("react");
import { useEffect } from "react";
import Text from "../../../shared/components/text/Text";
import { useCartReducer } from "../../../story/reducers/cartReducer/useCartReducer";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_CART } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import { CartType } from "../../../shared/types/cartType";
import { View } from "react-native";

const Cart = () => {
    const {request} = useRequest();
    const {cart, setCart} = useCartReducer();
    useEffect(() => {
        request<CartType>({
            url: URL_CART,
            method: MethodEnum.GET,
            saveGlobal: setCart,
        });
    }, []);
  return (<View>
    <Text>
  Carrinho
  </Text>

    <Text>{cart.id}</Text>
  </View>);
};
export default Cart;
