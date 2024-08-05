import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { ReactFlow } from "@xyflow/react"

import style from './Actor.module.css'
import { getFilms, getHero, getStarships } from "../../api"
import { useRelationships } from "../../hooks/useRelationships"

const Actor = () => {
  const { id } = useParams()

  const { data: actor, isError: actorIsError, isLoading: actorIsLoading } = useQuery({
    queryKey: ['hero', id],
    queryFn: () => getHero(Number(id))
  })

  const { data: films, isLoading: filmsIsLoading, isError: filmsIsError } = useQuery({
    queryKey: ['films', id],
    queryFn: () => getFilms(Number(id)),
    select: data => data.results,
  })

  const { data: starships, isLoading: starshipsIsLoading, isError: starshipsIsError } = useQuery({
    queryKey: ['starships', id],
    queryFn: () => getStarships(Number(id)),
    select: data => data.results,
  })

  const { initialNodes, initialEdges } = useRelationships(actor, films, starships)

  return (
    <div>
      {
        (actorIsError || filmsIsError || starshipsIsError) ? <h2>Error, try reload page</h2>

          : (filmsIsLoading || actorIsLoading || starshipsIsLoading) ? <h2>Loading...</h2>
            :
            <div className={style.container}>
              <div>
                <h2 className={style.cardTitle}>{actor.name}</h2>
                <p className={style.cardGrid}>Height: {actor.height}</p>
                <p className={style.cardGrid}>Mass: {actor.mass}</p>
                <p className={style.cardGrid}>Birth year: {actor.birth_year}</p>
                <p className={style.cardGrid}>Gender: {actor.gender}</p>
                <p className={style.cardGrid}>Hair color: {actor.hair_color}</p>
                <p className={style.cardGrid}>Skin color: {actor.skin_color}</p>
                <p className={style.cardGrid}>Eye color: {actor.eye_color}</p>
              </div >
              <div className={style.flow}>
                <ReactFlow nodes={initialNodes} edges={initialEdges} draggable={true} />
              </div>
            </div>
      }
    </div>

  )
}

export default Actor