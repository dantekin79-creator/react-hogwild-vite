
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddHogForm from "../components/AddHogForm";
import { vi } from "vitest";

describe("AddHogForm Component", () => {
  it("updates form state on user input", () => {
    render(<AddHogForm onAddHog={() => {}} />);

    const nameInput = screen.getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "Test Hog" } });
    expect(nameInput.value).toBe("Test Hog");

    const weightInput = screen.getByLabelText("Weight:");
    fireEvent.change(weightInput, { target: { value: "5.0" } });
    expect(weightInput.value).toBe("5.0");
  });

  it("calls onAddHog with the correct form data on submission", async () => {
    const mockOnAddHog = vi.fn();
    render(<AddHogForm onAddHog={mockOnAddHog} />);

    fireEvent.change(screen.getByLabelText("Name:"), { target: { value: "Super Pig" } });
    fireEvent.change(screen.getByLabelText("Weight:"), { target: { value: "10" } });
    fireEvent.change(screen.getByLabelText("Specialty:"), { target: { value: "Flying" } });
    fireEvent.click(screen.getByLabelText("Greased?"));

    const addButton = screen.getByRole("button", { name: "Add Hog" });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(mockOnAddHog).toHaveBeenCalledWith(expect.objectContaining({
        name: "Super Pig",
        weight: 10,
        specialty: "Flying",
        greased: true,
      }));
    });
  });
});
