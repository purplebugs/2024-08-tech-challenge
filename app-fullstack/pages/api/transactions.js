import db from "../../db/db.js";

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function handler(req, res) {
  const { body, method } = req;

  const id = parseInt("1234", 10);

  if (req.method === "POST") {
    // TODO get account_id, amount from form

    const transaction_id = uuid();
    const response = {
      transaction_id: transaction_id,
      account_id: "0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2",
      amount: 7,
      created_at: new Date().toString(), // TODO proper date handling using some library
    };

    db.set(transaction_id, response);
    res.status(201).json(response);
  }
}
