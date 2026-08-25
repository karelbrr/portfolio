import { render, screen } from "@testing-library/react";
import ExperienceSection from "@/components/experience-section";
import { EXPERIENCE_DATA } from "@/components/projects-section";

// Mock the EXPERIENCE_DATA to ensure tests are isolated if the data changes
jest.mock("@/components/projects-section", () => ({
  EXPERIENCE_DATA: [
    {
      id: "exp-test",
      role: "test developer",
      company: "test corp",
      description: "Test description for the role.",
      duration: "jan 2020 - dec 2020",
    }
  ]
}));

describe("ExperienceSection", () => {
  it("renders the experience headings", () => {
    render(<ExperienceSection experienceHorizontalProgress={0} />);
    // There is a mobile heading and a desktop heading
    const headings = screen.getAllByRole("heading", { name: /experience/i });
    expect(headings.length).toBeGreaterThan(0);
  });

  it("renders the experience data", () => {
    render(<ExperienceSection experienceHorizontalProgress={0.5} />);
    
    // Check if the mock data is rendered
    expect(screen.getAllByText(/test developer/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/test corp/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/jan 2020 - dec 2020/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Test description for the role\./i)[0]).toBeInTheDocument();
  });
});
