import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ handleIncrement, handleDecrement }) {
  return (
    <div className="button-container">
      <button className="count-btn" onClick={handleDecrement}>
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn" onClick={handleIncrement}>
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}