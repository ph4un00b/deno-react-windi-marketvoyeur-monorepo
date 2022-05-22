import React from "https://esm.sh/react@18";
import {
  useLocation,
  useNavigate,
  useParams,
} from "https://esm.sh/react-router-dom@6";
import { deleteStock, getStock } from "../data.ts";

export default function StockPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const stock = getStock(Number(params.stockId));

  if (!stock) return <p>No stock!</p>;

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {stock.amount}</h2>

      <p>
        {stock.name}: {stock.number}
      </p>

      <p>Due Date: {stock.due}</p>

      <p>
        <button
          onClick={() => {
            deleteStock(stock.number);
            navigate("/stock" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
