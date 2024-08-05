import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CustomCard from './CustomCard';
import { IHero } from '../../interfaces/Hero.interfaces';

// Mock data for the test
const mockHero: IHero = {
  id: 1,
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  gender: 'male',
  birth_year: '',
  homeworld: '',
  films: [],
  species: [],
  starships: [],
  vehicles: [],
  url: '',
  created: '',
  edited: ''
};

describe('CustomCard Component', () => {
  it('renders the hero card with correct details', () => {
    render(
      <MemoryRouter>
      <CustomCard { ...mockHero } />
      </MemoryRouter>
    );

    // Check that the hero's name is displayed
    expect(screen.getByTitle(mockHero.name)).toBeInTheDocument();
    expect(screen.getByText(mockHero.name)).toBeInTheDocument();

    // Check that the hero's attributes are displayed
    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText(mockHero.height)).toBeInTheDocument();
    expect(screen.getByText('Mass')).toBeInTheDocument();
    expect(screen.getByText(mockHero.mass)).toBeInTheDocument();
    expect(screen.getByText('Hair color')).toBeInTheDocument();
    expect(screen.getByText(mockHero.hair_color)).toBeInTheDocument();
    expect(screen.getByText('Skin color')).toBeInTheDocument();
    expect(screen.getByText(mockHero.skin_color)).toBeInTheDocument();
    expect(screen.getByText('Eye color')).toBeInTheDocument();
    expect(screen.getByText(mockHero.eye_color)).toBeInTheDocument();
    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText(mockHero.gender)).toBeInTheDocument();

    // Check that the link is present and has the correct URL
    const linkElement = screen.getByText(/More info/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', `/actor/${mockHero.id}`);
  });
});
