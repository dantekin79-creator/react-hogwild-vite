
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";
import { vi } from "vitest";

describe("Filter Component", () => {
  it("calls onGreasedChange with the correct value when checkbox is toggled", () => {
    const mockOnGreasedChange = vi.fn();
    const { rerender } = render(<Filter showGreasedOnly={false} onGreasedChange={mockOnGreasedChange} />);

    const checkbox = screen.getByLabelText("Greased Pigs Only?");
    fireEvent.click(checkbox);
    expect(mockOnGreasedChange).toHaveBeenCalledWith(true);

    // Rerender with the new state to simulate parent state update
    rerender(<Filter showGreasedOnly={true} onGreasedChange={mockOnGreasedChange} />);
    
    fireEvent.click(checkbox);
    expect(mockOnGreasedChange).toHaveBeenCalledWith(false);
  });

  it("calls onSortChange with the correct value when sort option is selected", () => {
    const mockOnSortChange = vi.fn();
    render(<Filter sortBy="all" onSortChange={mockOnSortChange} />);

    const select = screen.getByLabelText("Sort by:");
    fireEvent.change(select, { target: { value: "name" } });

    expect(mockOnSortChange).toHaveBeenCalledWith("name");

    fireEvent.change(select, { target: { value: "weight" } });
    expect(mockOnSortChange).toHaveBeenCalledWith("weight");
  });
});
