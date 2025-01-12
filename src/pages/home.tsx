import NavBar from '../components/navBar/navBar'
import ItemList from './item-lists/itemLists'

const Home = () => {
  return (
    <div className='h-full w-full'>
        <NavBar/>
        <div className='p-4'>
            <ItemList/>
        </div>
    </div>
  )
}

export default Home