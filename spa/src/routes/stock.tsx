import { React, useLocation, useNavigate, useParams } from "../deps.ts";
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
