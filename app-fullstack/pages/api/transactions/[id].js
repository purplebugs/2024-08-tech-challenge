import db from "../../../db/db.js";

export default function handler(req, res) {
  const { id } = req.query;

  const response = db.get(id);

  if (response === undefined) {
    res.status(404).json({ message: "Not found.", code: 404 });
  } else {
    res.status(200).json(response);
  }
}
