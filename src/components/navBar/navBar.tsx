import { CiShoppingCart } from "react-icons/ci";
const NavBar = () => {
  return (
    <div className='w-full h-16 border-b-2 border-b-black m-auto p-4 flex justify-between'>
        <div>
            POKEZON
        </div>
        <div>
            <CiShoppingCart size={'34px'}/>
        </div>
    </div>
  )
}

export default NavBar