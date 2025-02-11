import { CiShoppingCart, CiTrash } from "react-icons/ci";
interface NavBarProps {
  gotItems: boolean;
}

const NavBar = ({ gotItems }: NavBarProps) => {
  return (
    <div className='w-full h-16 border-b-2 border-b-black m-auto p-4 flex justify-between'>
        <div>
            POKEZON
        </div>
        <div onClick={()=>{
          localStorage.clear()
          window.location.reload()
          console.log('clear', localStorage.getItem('appContextItems'))
          }}>
          <CiTrash size={'34px'}/>
        </div>
        <div className="relative">
          {gotItems&&<div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0 translate-x-1 translate-y-1"></div>}
            <CiShoppingCart size={'34px'}/>
        </div>
    </div>
  )
}

export default NavBar