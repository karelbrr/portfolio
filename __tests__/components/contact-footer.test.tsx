import { render, screen } from "@testing-library/react";
import ContactFooter from "@/components/contact-footer";

describe("ContactFooter", () => {
  it("renders the contact heading", () => {
    render(<ContactFooter />);
    const heading = screen.getByRole("heading", { name: /contact/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the email link", () => {
    render(<ContactFooter />);
    const emailLink = screen.getByRole("link", { name: /karelbr7@gmail.com/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:karelbr7@gmail.com");
  });

  it("renders social links", () => {
    render(<ContactFooter />);
    
    const instagram = screen.getByRole("link", { name: /instagram/i });
    expect(instagram).toBeInTheDocument();
    expect(instagram).toHaveAttribute("href", "https://www.instagram.com/karelbraborec/");

    const github = screen.getByRole("link", { name: /github/i });
    expect(github).toBeInTheDocument();
    expect(github).toHaveAttribute("href", "https://github.com/karelbrr");

    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/karel-braborec-1943083a4/");
  });

  it("renders copyright and end of file text", () => {
    render(<ContactFooter />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Karel Braborec`, "i"))).toBeInTheDocument();
    expect(screen.getByText(/end of file\./i)).toBeInTheDocument();
  });
});
