import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "./SearchBox";

describe("Search Box", () => {
  it('input should have value "star wars" as value in input when user types "star wars', () => {
    render(<SearchBox searchValue="star wars" setSearchValue={() => {}} />);

    const searchBox = screen.getByRole("searchbox");
    expect(searchBox).toBeInTheDocument();

    userEvent.type(searchBox, "star wars");

    expect(searchBox).toHaveValue("star wars");
  });
});
