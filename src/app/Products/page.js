import FilterableList from "@/components/FilterableList";
import Header from "@/components/Header";

const products = [
    { name: "Product 1" },
    { name: "Product 2" },
    { name: "Product 3" },
  ];
  
  export default function Products() {
    return (
      <div>
        <Header title="Products" />
        <h1>Our Products</h1>
        <FilterableList items={products} />
      </div>
    );
  }
