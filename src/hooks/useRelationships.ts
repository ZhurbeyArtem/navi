import { IEdges } from "../interfaces/Edges.interfaces";
import { IFilm } from "../interfaces/Film.interfaces";
import { IHero } from "../interfaces/Hero.interfaces";
import { INodes } from "../interfaces/Nodes.interfaces";
import { IStarship } from "../interfaces/Starships.interfaces";

export const useRelationships = (actor: IHero, films: IFilm[], starships: IStarship[]) => {
  const initialNodes: INodes[] = [
    { id: actor?.name, position: { x: 0, y: 0 }, data: { label: actor?.name } },
  ]
  const initialEdges: IEdges[] = [];

  films?.reduce((prev: { x: number }, el: IFilm) => { // create relationship between actor and films
    const newNode = {
      id: el.title,
      position: { x: prev.x + 200, y: 100 },
      data: { label: el.title }
    };

    initialNodes.push(newNode);
    const newEdge = {
      id: `${initialNodes[0].id}-${newNode.id}`,
      source: initialNodes[0].id,
      target: newNode.id
    }
    initialEdges.push(newEdge)

    const starshipsFromFilm = starships.filter((starship: IStarship) => starship.films.includes(el.id));


    starshipsFromFilm?.forEach((starship: IStarship) => { // create relationship between film and starship
      const newStarshipNode = {
        id: starship.name,
        position: { x: prev.x + 250, y: 300 },
        data: { label: starship.name }
      }
      initialNodes.push(newStarshipNode);

      const newStarshipEdge = {
        id: `${newNode.id}-${newStarshipNode.id}`,
        source: newNode.id,
        target: newStarshipNode.id
      }
      initialEdges.push(newStarshipEdge)
    })

    return { x: newNode.position.x };
  }, { x: 0 });

  return {
    initialNodes,
    initialEdges
  }
}