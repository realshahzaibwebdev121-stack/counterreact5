import { useState, useEffect } from "react";
import CountButtons from "./components/CountButtons";
import Count from "./components/Count";
import Reset from "./components/Reset";
import Title from "./components/Title";

export default function App() {
  const [count, setCount] = useState(0);


  const handleIncrement = () => setCount((prev) => (prev < 5 ? prev + 1 : prev));
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const handleReset = () => setCount(0);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        handleIncrement();
      } else if (event.key === "ArrowDown") {
        handleDecrement();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main>
     
      <div className={`card ${count === 5 ? "card--limit" : ""}`}>
        <Title />
        <Count count={count} />
        <Reset setCount={handleReset} />
        <CountButtons 
          handleIncrement={handleIncrement} 
          handleDecrement={handleDecrement} 
        />
      </div>
    </main>
  );
}