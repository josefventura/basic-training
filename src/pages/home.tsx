import NavBar from '../components/navBar/navBar'
import ItemList from './item-lists/itemLists'
import { useHomeHook } from './useHomehook';

const Home = () => {
  const {items, handleAddItem} = useHomeHook(); 
  console.log(`items`, items)
  return (
    <div className='h-full w-full'>
        <NavBar gotItems={items.length>0}/>
        <div className='p-4'>
            <ItemList handleAddItem={handleAddItem}/>
        </div>
    </div>
  )
}

export default Home