

type ListProps<T> = {
  itemsData: T[];
  Component: React.FC<T>;
};

export default function List<T>({ itemsData, Component }: ListProps<T>) {
  return (
    <>
      {itemsData.map((itemsData, index) => (
        <Component key={index} {...itemsData} />
      ))}
    </>
  );
}
