export const generateStaticParams = () => {
  return [{item: "page-one"}, {item: "page-two"}]
}


const Item = ({ params }) => {
  const { item } = params;

  return (
  <main>
    Item {item}

  </main>);
};

export default Item;
