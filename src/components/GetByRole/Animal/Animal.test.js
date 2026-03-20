import { render, screen } from "@testing-library/react";
import Animal from "./Animal";

describe("renders animal component", () => {
   test("renders heading", () => {
      render(<Animal />);

      const h1Element = screen.getByRole("heading", { level: 1 });
      expect(h1Element).toBeInTheDocument();

      const articleElement = screen.getByRole("article");
      expect(articleElement).toBeInTheDocument();

      const imgElement = screen.getByRole("img");
      expect(imgElement).toBeInTheDocument();

      const h2Element = screen.getByRole("heading", { level: 2 });
      expect(h2Element).toBeInTheDocument();

      const inputFirstName = screen.getByRole("textbox", { name: "Prénom" });
      expect(inputFirstName).toBeInTheDocument();

      const inputLastName = screen.getByRole("textbox", { name: "Nom" });
      expect(inputLastName).toBeInTheDocument();

      const selectElement = screen.getByRole("combobox");
      expect(selectElement).toBeInTheDocument();

      const inputCheckboxTerms = screen.getByRole("checkbox", {
         name: "Accepter les conditions",
      });
      expect(inputCheckboxTerms).toBeInTheDocument();

      const inputCheckboxNewsletter = screen.getByRole("checkbox", {
         name: "S'abonner à la newsletter",
      });
      expect(inputCheckboxNewsletter).toBeInTheDocument();

      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeInTheDocument();
   });
});
