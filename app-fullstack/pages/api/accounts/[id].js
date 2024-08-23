import "../../../db/db.js";

export default function handler(req, res) {
  const { id } = req.query;

  let balance = 0;

  globalThis.dbTransactions.forEach((value) => {
    if (value?.account_id === id) {
      balance = balance + value?.amount;
    }
  });

  res.status(200).json({ account_id: id, balance: balance });
}
