import { render, screen } from '@testing-library/react';
import Hero from '@/components/hero-section';

describe('Hero Component', () => {
  beforeEach(() => {
    // Reset userAgent mock if needed
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      configurable: true,
    });
  });

  it('renders the name and title', () => {
    render(<Hero />);
    
    // Check if name is rendered
    expect(screen.getByText(/Braborec/i)).toBeDefined();
  });

  it('displays CTRL+ALT+DEL on Windows', () => {
    render(<Hero />);
    expect(screen.getByText('* press CTRL+ALT+DEL to contact directly.')).toBeDefined();
  });

  it('displays CTRL+OPTION+DEL on Mac', () => {
    // Mock userAgent for Mac
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      configurable: true,
    });
    
    render(<Hero />);
    expect(screen.getByText('* press CTRL+OPTION+DEL to contact directly.')).toBeDefined();
  });
});
