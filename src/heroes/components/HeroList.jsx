import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPubisher'
import { HeroCard } from './HeroCard'


export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className='row rows-cols-1 row-cols-md-3 row-cols-sm-2 g-3'>
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  )
}
