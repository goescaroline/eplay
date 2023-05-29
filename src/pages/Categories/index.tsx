import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetRPGGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esporte"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
