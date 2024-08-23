import { useState, useEffect } from "react";

function TransactionList() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No transactions data</p>;

  return data.map((transaction) => (
    <div
      key={transaction.transaction_id}
      data-type="transaction"
      data-account-id={transaction.account_id}
      data-amount={transaction.amount}
      data-balance="${current-account-balance}"
    >
      <p>
        Transferred ${transaction.amount} to account ${transaction.account_id}
      </p>
    </div>
  ));
}

export default TransactionList;
