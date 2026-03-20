import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("renders welcome message", () => {
   render(<Welcome />);
   const welcomeElement = screen.getByText("Welcome");
   expect(welcomeElement).toBeInTheDocument();
});
