import { render, screen } from '@testing-library/react';
import App from './App';


describe('testing App Component',()=>
{
  test('renders Active link of Navbar', () => {
    render(<App />);
    const linkElement = screen.getByText('Active');
    expect(linkElement).toBeInTheDocument();
  });
  test('renders Techwave  Task Assignment statement in body', () => {
    render(<App />);
    const linkElement = screen.getByText('View UserInfo');
    expect(linkElement).toBeInTheDocument();
  });
  test('renders Techwave  Task Assignment statement in body', () => {
    render(<App />);
    const linkElement = screen.getByText('Add UserInfo');
    expect(linkElement).toBeInTheDocument();
  });
 
  
}
)