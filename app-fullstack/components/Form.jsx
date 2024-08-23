async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  console.log("account_id", formData.get("account_id"));
  console.log("amount", formData.get("amount"));

  const response = await fetch("/api/transactions", {
    method: "POST",
    body: formData,
  });

  // Both input fields should be cleared after the form is submitted.
  document.getElementById("transactionForm").reset();

  // Handle response if necessary
  const data = await response.json();
  console.log("data", data);
  // ...
}

const Form = () => (
  <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
      <h3 className="text-2xl font-bold ">Submit new transaction</h3>
      <form id="transactionForm" onSubmit={onSubmit}>
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
  </div>
);

export default Form;
