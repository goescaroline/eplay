import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetRPGGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingActionGames } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSportsGames } =
    useGetSportsGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulationnGames } =
    useGetSimulationGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpgGames } = useGetRPGGamesQuery()
  const { data: fightGames, isLoading: isLoadingFightGames } =
    useGetFightGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingActionGames}
      />
      <ProductsList
        games={sportGames}
        title="Esporte"
        background="gray"
        id="sports"
        isLoading={isLoadingSportsGames}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulationnGames}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFightGames}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpgGames}
      />
    </>
  )
}

export default Categories
