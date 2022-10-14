import Card from "../card/card";

// eslint-disable-next-line react/prop-types
const Grid = ({products}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
      {
        // eslint-disable-next-line react/prop-types
        products.map((product) => {
          return <Card product={product} key={product.id}></Card>
        })
      }
    </div>
  );
};

export default Grid;
