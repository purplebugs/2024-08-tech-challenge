import httpMocks from "node-mocks-http";
import handler from "./[id].js";

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
