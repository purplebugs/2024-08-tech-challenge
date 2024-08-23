function TransactionList({ balance, data, isLoading }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data?.length == 0) {
    return <p>No transactions data</p>;
  }

  if (data?.length > 0) {
    console.log(data);

    return data.map((transaction, index) => (
      <div
        key={transaction.transaction_id}
        data-type="transaction"
        data-account-id={transaction.account_id}
        data-amount={transaction.amount}
        data-balance={balance}
      >
        <p>
          Transferred ${transaction.amount} to account {transaction.account_id}
        </p>
        {index === 0 && (
          <p>
            {index} - The current account balance is $ {balance}
          </p>
        )}
      </div>
    ));
  }
}

export default TransactionList;
