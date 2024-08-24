import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productAction";

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, products, pagination } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {products.length > 1 && (
        <Box>
          <Wrap
            spacing="30px"
            justify="center"
            minHeight="80vh"
            mx={{ base: "12", md: "20", lg: "32" }}
          >
            {products.map((product, index) => (
              <WrapItem key={index}>
                <Center w="250px" h="auto">
                  <ProductCard product={product} loading={false} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </>
  );
};

export default ProductsScreen;
