import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import Actor from './Actor';
import { getFilms, getHero, getStarships } from '../../api';
import { useRelationships } from '../../hooks/useRelationships';
import { INodes } from '../../interfaces/Nodes.interfaces';
import { IEdges } from '../../interfaces/Edges.interfaces';
import { render } from '../../test/test-utils';

// mock api and hook
vi.mock('../../api');
vi.mock('../../hooks/useRelationships');

describe('Actor page', () => {
  const mockHero = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    gender: 'male',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue'
  };

  const mockFilms = { results: [{ id: 1, title: 'A New Hope' }] };
  const mockStarships = { results: [{ id: 1, name: 'X-wing' }] };
  const mockInitialNodes: INodes[] = [];
  const mockInitialEdges: IEdges[] = [];

  beforeEach(() => {
    // Mock implementation of API functions
    (getHero as Mock).mockResolvedValue(mockHero);
    (getFilms as Mock).mockResolvedValue(mockFilms);
    (getStarships as Mock).mockResolvedValue(mockStarships);

    // Mock implementation of the useRelationships hook
    (useRelationships as Mock).mockReturnValue({
      initialNodes: mockInitialNodes,
      initialEdges: mockInitialEdges
    });
  });

  it('renders loading state initially', async () => {
    render(<Actor />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders hero data correctly', async () => {
    render(<Actor />);

    await waitFor(() => {
      expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
      expect(screen.getByText(/Height: 172/i)).toBeInTheDocument();
      expect(screen.getByText(/Mass: 77/i)).toBeInTheDocument();
      expect(screen.getByText(/Birth year: 19BBY/i)).toBeInTheDocument();
      expect(screen.getByText(/Gender: male/i)).toBeInTheDocument();
      expect(screen.getByText(/Hair color: blond/i)).toBeInTheDocument();
      expect(screen.getByText(/Skin color: fair/i)).toBeInTheDocument();
      expect(screen.getByText(/Eye color: blue/i)).toBeInTheDocument();
    });
  });

});
