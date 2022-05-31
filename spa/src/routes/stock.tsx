import { React, tw, useLocation, useNavigate, useParams } from "../client_deps.ts";
import CustomBtn from "../components/atoms/CustomBtn.tsx";
import { deleteStock, getStock } from "../data.ts";

export default function StockPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const stock = getStock(Number(params.stockId));

  if (!stock) return <p>No stock!</p>;

  return (
    <main className={tw`p-[1rem]`}>
      <h2>Total Due: {stock.amount}</h2>

      <p>
        {stock.name}: {stock.number}
      </p>

      <p>Due Date: {stock.due}</p>

      <p>
        <CustomBtn
          onClick={() => {
            deleteStock(stock.number);
            navigate("/stock" + location.search);
          }}
        >
          Delete
        </CustomBtn>
      </p>
    </main>
  );
}
