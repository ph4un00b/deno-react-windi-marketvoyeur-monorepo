export function allCoins() {
  return stocks;
}

export function getStock(number: number) {
  return stocks.find(
    (stock) => stock.number === number,
  );
}

export function deleteStock(number: number) {
  stocks = stocks.filter(
    (stock) => stock.number !== number,
  );
}

let stocks = [
  {
    name: "Amazon",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Alphabet",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Microsoft",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Apple",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Meta",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];
