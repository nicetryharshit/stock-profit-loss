import { useState } from "react";
import "./styles.css";

export default function App()
{
  const [initialPrice, setInitialPrice] = useState();
  const [stockQty, setStockQty] = useState();
  const [currentPrice, setCurrentPrice] = useState();
  const [result, setResult] = useState("");
  const [resultStyle, setResultStyle] = useState();

  const onInitialPriceChange = (event) =>
  {
    setInitialPrice(Number(event.target.value));
  };

  const onStockQtyChange = (event) =>
  {
    setStockQty(Number(event.target.value));
  };

  const onCurrentPriceChange = (event) =>
  {
    setCurrentPrice(Number(event.target.value));
  };

  const onCheck = () =>
  {
    if (initialPrice === undefined || currentPrice === undefined || stockQty === undefined)
    {
      setResultStyle(
        {
          backgroundColor: "#CAE1ED"
        }
      );
      setResult("Please fill all fields with correct data");
    }
    else if (initialPrice === currentPrice)
    {
      setResultStyle(
        {
          backgroundColor: "#CAE1ED"
        }
      );
      setResult("No profit or loss");
    } else if (initialPrice > currentPrice)
    {
      let loss = (initialPrice - currentPrice) * stockQty;
      let lossPerc = (loss / initialPrice) * 100;

      setResultStyle(
        {
          backgroundColor: "#FCA998"
        }
      );
      setResult("Loss: " + loss + ". Loss percentage: " + lossPerc + "%");
    } else
    {
      let profit = (currentPrice - initialPrice) * stockQty;
      let profitPerc = (profit / initialPrice) * 100;

      setResultStyle(
        {
          backgroundColor: "#98FCA4"
        }
      );
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
            type="number"
            placeholder="Enter initial price"
            onChange={onInitialPriceChange}
          ></input>
        </div>
        <div className="labelled-input">
          <label>Stock quantitiy</label>
          <input
            type="number"
            placeholder="Enter stock quantity"
            onChange={onStockQtyChange}
          ></input>
        </div>
        <div className="labelled-input">
          <label>Current price</label>
          <input
            type="number"
            placeholder="Enter current price"
            onChange={onCurrentPriceChange}
          ></input>
        </div>
        <button className="cta-btn" onClick={() => onCheck()}>
          Check
        </button>
        <h3 className="result" style={resultStyle}>{result}</h3>
      </section>
    </div>
  );
}
