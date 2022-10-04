import { useState } from "react";
import "./styles.css";

export default function App() {
  const [initialPrice, setInitialPrice] = useState(0);
  const [stockQty, setStockQty] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [result, setResult] = useState("");

  const onInitialPriceChange = (event) => {
    setInitialPrice(Number(event.target.value));
  };

  const onStockQtyChange = (event) => {
    setStockQty(Number(event.target.value));
  };

  const onCurrentPriceChange = (event) => {
    setCurrentPrice(Number(event.target.value));
  };

  const onCheck = () => {
    if (initialPrice === currentPrice) {
      setResult("No profit or loss");
    } else if (initialPrice > currentPrice) {
      let loss = (initialPrice - currentPrice) * stockQty;
      let lossPerc = (loss / initialPrice) * 100;

      setResult("Loss: " + loss + ". Loss percentage: " + lossPerc + "%");
    } else {
      let profit = (currentPrice - initialPrice) * stockQty;
      let profitPerc = (profit / initialPrice) * 100;

      setResult(
        "Profit: " + profit + ". Profit percentage: " + profitPerc + "%"
      );
    }
  };
  return (
    <div className="App">
      <section>
        <h1>Stock profit and loss calculator!</h1>
        <div className="labelled-input">
          <label>Initial price</label>
          <input
            placeholder="Enter initial price"
            onChange={onInitialPriceChange}
          ></input>
        </div>
        <div className="labelled-input">
          <label>Stock quantitiy</label>
          <input
            placeholder="Enter stock quantity"
            onChange={onStockQtyChange}
          ></input>
        </div>
        <div className="labelled-input">
          <label>Current price</label>
          <input
            placeholder="Enter current price"
            onChange={onCurrentPriceChange}
          ></input>
        </div>
        <button className="cta-btn" onClick={() => onCheck()}>
          Check
        </button>
        <h3>{result}</h3>
      </section>
    </div>
  );
}
