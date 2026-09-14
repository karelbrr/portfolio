import { render, screen } from "@testing-library/react";
import ExperienceSection from "@/components/experience-section";

describe("ExperienceSection", () => {
  it("renders the experience headings", () => {
    render(<ExperienceSection experienceHorizontalProgress={0} />);
    // There is a mobile heading and a desktop heading
    const headings = screen.getAllByRole("heading", { name: /experience/i });
    expect(headings.length).toBeGreaterThan(0);
  });

  it("renders the experience data", () => {
    render(<ExperienceSection experienceHorizontalProgress={0.5} />);
    
    // Check if the actual data is rendered
    expect(screen.getAllByText(/junior frontend developer/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Kedify/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/june 2025 - nov 2025/i)[0]).toBeInTheDocument();
  });
});
