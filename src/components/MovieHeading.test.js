import { render, screen } from "@testing-library/react";
import MovieHeading from "./MovieHeading";

describe("Movie Heading Component", () => {
  it("should render correct heading with props", () => {
    render(<MovieHeading heading="Movies" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Movies");
  });
});
