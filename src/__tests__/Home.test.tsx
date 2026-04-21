import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Home", () => {
  it("renders the homepage hero title", () => {
    render(<Home />);

    const mainContent = screen.getByText(/Designing Biomolecules for Therapeutic Innovation/i);

    expect(mainContent).toBeInTheDocument();
  });
});
