import React from "react";
import { render } from "@testing-library/react";
import Hero from "../components/Hero";

test("renders header", () => {
  const { getByText } = render(<Hero />);
  const headerElement = getByText(/Obos payment transactions/);
  expect(headerElement).toBeInTheDocument();
});
