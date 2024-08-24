import httpMocks from "node-mocks-http";
import handler from "./[id].js";
import "../../../db/db.js";

test("/api/transactions/[id] - return 200", () => {
  const transactionId = "9becc03c-a6a0-4b2c-aa9a-1f798937589f";
  const dbResponse = {
    transaction_id: transactionId,
    account_id: "anita-is-cool",
    amount: -56,
    created_at:
      "Sat Aug 24 2024 15:42:11 GMT+0200 (Central European Summer Time)",
  };

  globalThis.dbTransactions.set(transactionId, dbResponse);

  const req = httpMocks.createRequest({
    method: "GET",
    url: `/transactions/${transactionId}`,
    query: {
      id: transactionId,
    },
  });

  const res = httpMocks.createResponse();

  handler(req, res);

  const data = res._getJSONData();

  expect(res.statusCode).toBe(200);
  expect(data.transaction_id).toBe(transactionId);
  expect(data.account_id).toBe("anita-is-cool");
  expect(data.amount).toBe(-56);
  expect(data.created_at).not.toBe(null);
});

test("/api/transactions/I-do-not-exist - return 404", () => {
  const req = httpMocks.createRequest({
    method: "GET",
    url: "/transactions/I-do-not-exist",
  });

  const res = httpMocks.createResponse();

  handler(req, res);

  const data = res._getJSONData();

  expect(res.statusCode).toBe(404);
  expect(data.message).toBe("Not found.");
  expect(data.code).toBe(404);
});
