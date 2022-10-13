import Card from "../card/card";

const Grid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Grid;
