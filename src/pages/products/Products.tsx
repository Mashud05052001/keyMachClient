import CommonMarginTopContainer from "@/components/container/CommonMarginTopContainer";
import ProductsAllCarts from "@/components/products/Products.carts";
import ProductsHeaderSection from "@/components/products/Products.header";

const Products = () => {
  return (
    <CommonMarginTopContainer>
      <ProductsHeaderSection />
      <CommonMarginTopContainer>
        <ProductsAllCarts />
      </CommonMarginTopContainer>
    </CommonMarginTopContainer>
  );
};

export default Products;
