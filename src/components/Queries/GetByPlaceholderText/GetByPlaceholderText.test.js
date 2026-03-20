import { render, screen } from "@testing-library/react";
import GetByPlaceholderText from "./GetByPlaceholderText";

describe("renders GetByPlaceholderText component", () => {
   test("renders heading", () => {
      render(<GetByPlaceholderText />);

      const inputElementFirstName = screen.getByPlaceholderText(
         "Indiquez votre prénom",
      );
      expect(inputElementFirstName).toBeInTheDocument();
        const inputElementLastName = screen.getByPlaceholderText(
         "Indiquez votre nom",
      );
      expect(inputElementLastName).toBeInTheDocument();
   });
});
