import { useAddItems } from '../components/customHooks/useAddItems';
import NavBar from '../components/navBar/navBar'
import ItemList from './item-lists/itemLists'

const Home = () => {
  const {items} = useAddItems();
  return (
    <div className='h-full w-full'>
        <NavBar gotItems={items.length>0}/>
        <div className='p-4'>
            <ItemList/>
        </div>
    </div>
  )
}

export default Home