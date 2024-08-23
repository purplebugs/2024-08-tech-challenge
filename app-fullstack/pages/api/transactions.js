import "../../db/db.js";

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function handler(req, res) {
  const { body, method } = req;

  if (method === "POST") {
    const transaction_id = uuid();
    const response = {
      transaction_id: transaction_id,
      account_id: body.account_id,
      amount: parseInt(body.amount),
      created_at: new Date().toString(), // TODO proper date handling using some library
    };

    globalThis.dbTransactions.set(transaction_id, response);

    res.status(201).json(response);
  }
}
