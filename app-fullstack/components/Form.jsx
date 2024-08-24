async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const response = await fetch("/api/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      account_id: formData.get("account_id"),
      amount: formData.get("amount"),
    }),
  });

  // Both input fields should be cleared after the form is submitted.
  document.getElementById("transactionForm").reset();

  // Handle response if necessary
  //   const data = await response.json();
  //   console.log("data", data);
  // ...
}

const Form = ({ setTransactions, fetchTransactions }) => (
  <section>
    <h3 className="text-2xl font-bold text-left">Submit new transaction</h3>
    <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600">
      <form
        id="transactionForm"
        onSubmit={async (event) => {
          await onSubmit(event);
          setTransactions(fetchTransactions);
        }}
      >
        <label htmlFor="account_id">Account id:</label>
        <input
          required
          data-type="account-id"
          type="text"
          id="account_id"
          name="account_id"
        />

        <label htmlFor="amount">Amount:</label>
        <input
          required
          data-type="amount"
          type="text"
          id="amount"
          name="amount"
        />

        <input data-type="transaction-submit" type="submit" value="Submit" />
      </form>
    </div>
  </section>
);

export default Form;
