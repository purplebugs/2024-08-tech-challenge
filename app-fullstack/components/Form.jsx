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
        <fieldset>
          <label htmlFor="account_id" className="block">
            Account id:
          </label>
          <input
            required
            pattern="^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"
            data-type="account-id"
            type="text"
            id="account_id"
            name="account_id"
            className="border rounded-xl border-2 border-purple-500 my-5 w-full"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="amount" className="block">
            Amount:
          </label>
          <input
            required
            pattern="^\-?[[:digit:]]$"
            data-type="amount"
            type="text"
            id="amount"
            name="amount"
            className="border rounded-xl border-2 border-purple-500 my-5 w-full"
          />
        </fieldset>

        <input
          data-type="transaction-submit"
          type="submit"
          value="Submit"
          className="border rounded-xl border-2 border-purple-500 my-5 w-full"
        />
      </form>

      <div className="my-10">
        Example valid account ids:
        <ul className="list-disc">
          <li>89fd4cb4-2b49-4c92-b3d7-1cfaee1a2ac3</li>
          <li>9c5dac6c-f4cd-4af8-aeee-027f3f775026</li>
          <li>39e210d7-c11b-45d3-a5ef-2af3a88590a1</li>
        </ul>
      </div>

      <div className="my-10">
        Example valid amounts:
        <ul className="list-disc">
          <li>55</li>
          <li>-17</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Form;
