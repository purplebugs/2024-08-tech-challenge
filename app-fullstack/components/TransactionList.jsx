function TransactionList({ balance, data, isLoading }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data?.length == 0) {
    return <p>No transactions data</p>;
  }

  if (data?.length > 0) {
    console.log(data);

    return (
      <section>
        <h3 className="text-2xl font-bold text-left">Transaction history</h3>
        {data.map((transaction, index) => (
          <div
            className={
              index === 0
                ? "p-6 mt-6 text-left border w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600 border-2 border-purple-500"
                : "p-6 mt-6 text-left border w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
            }
            key={transaction.transaction_id}
            data-type="transaction"
            data-account-id={transaction.account_id}
            data-amount={transaction.amount}
            data-balance={balance}
          >
            <p>
              Transferred ${transaction.amount} to account{" "}
              {transaction.account_id}
            </p>
            {index === 0 && <p>The current account balance is $ {balance}</p>}
          </div>
        ))}
      </section>
    );
  }
}

export default TransactionList;
