import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import FormikUserForm from "../src/components/UserForm";

describe("<FormikUserForm />", () => {
  it("renders without crashing", () => {
    render(<FormikUserForm />);
  });
});