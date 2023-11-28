import { useItem } from "../../store/select-item";
import "./Siderbar.css";

const Siderbar = () => {
  const { item, setItem } = useItem();

  const seletItem = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const item = event.currentTarget.dataset.item;
    item && setItem(parseInt(item));
  };

  return (
    <section className="siderbar">
      <div
        data-item={1}
        className={item === 1 ? "itemActive" : "itemDisabled"}
        onClick={seletItem}
      />
      <div
        data-item={2}
        className={item === 2 ? "itemActive" : "itemDisabled"}
        onClick={seletItem}
      />
      <div
        data-item={3}
        className={item === 3 ? "itemActive" : "itemDisabled"}
        onClick={seletItem}
      />
      <div
        data-item={4}
        className={item === 4 ? "itemActive" : "itemDisabled"}
        onClick={seletItem}
      />
      <div
        data-item={5}
        className={item === 5 ? "itemActive" : "itemDisabled"}
        onClick={seletItem}
      />
    </section>
  );
};

export default Siderbar;
