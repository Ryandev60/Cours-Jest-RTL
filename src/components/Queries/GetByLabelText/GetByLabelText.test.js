import { render, screen } from "@testing-library/react";
import GetByLabelText from "./GetByLabelText";

describe("renders GetByLabelText component", () => {
   test("renders heading", () => {
      render(<GetByLabelText />);

      const inputFirstName = screen.getByLabelText("Prénom");
      expect(inputFirstName).toBeInTheDocument();

      const inputLastName = screen.getByLabelText("Nom");
      expect(inputLastName).toBeInTheDocument();

      const inputUserName = screen.getByLabelText("Username");
      expect(inputUserName).toBeInTheDocument();

      const inputCheckboxTerms = screen.getByLabelText(
         "Accepter les conditions",
      );
      expect(inputCheckboxTerms).toBeInTheDocument();

      const inputCheckboxNewsletter = screen.getByLabelText(
         "Je m'abonne à la newsletter",
      );
      expect(inputCheckboxNewsletter).toBeInTheDocument();

      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeInTheDocument();

      const input = screen.getByLabelText("Animal Préféré", {selector: 'input'});
      expect(input).toBeInTheDocument();

      const textarea = screen.getByLabelText("Animal Préféré", {selector: 'textarea'});
      expect(textarea).toBeInTheDocument();
   });
});
