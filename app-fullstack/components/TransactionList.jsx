function TransactionList({ data, isLoading }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data?.length == 0) {
    return <p>No transactions data</p>;
  }

  if (data?.length > 0) {
    console.log(data);

    return data.map((transaction) => (
      <div
        key={transaction.transaction_id}
        data-type="transaction"
        data-account-id={transaction.account_id}
        data-amount={transaction.amount}
        data-balance="${current-account-balance}"
      >
        <p>
          Transferred ${transaction.amount} to account {transaction.account_id}
        </p>
      </div>
    ));
  }
}

export default TransactionList;
