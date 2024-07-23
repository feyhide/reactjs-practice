import React from 'react'
import Bagsummary from '../components/Bagsummary'
import BagItems from '../components/BagItems'
import { useSelector } from 'react-redux'
const Bag = () => {
  const bagitems = useSelector((store)=> store.bag)
  
  const items = useSelector((store)=> store.items)

  const finalitems = items.filter((items) => {
    const itemsindex = bagitems.indexOf(items.id)
    return itemsindex >= 0;

  })
  return (
    <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
        {finalitems.map((items) => <BagItems item={items}/>)}
        </div>
        <Bagsummary/>

      </div>
    </main>
    
    </>
  )
}

export default Bag