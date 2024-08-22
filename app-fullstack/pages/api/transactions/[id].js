import db from "../../../db/db.js";

export default function handler(req, res) {
  const { id } = req.query;

  const response = db.get(id);

  res.status(200).json(response);
}
