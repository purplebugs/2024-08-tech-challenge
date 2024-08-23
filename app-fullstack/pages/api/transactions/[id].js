import "../../../db/db.js";

export default function handler(req, res) {
  const { id } = req.query;

  const response = globalThis.dbTransactions.get(id);

  if (response === undefined) {
    res.status(404).json({ message: "Not found.", code: 404 });
  } else {
    res.status(200).json(response);
  }
}
