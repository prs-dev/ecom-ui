import { FaStar } from "react-icons/fa";

// const data = {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//         rate: 3.9,
//         count: 120
//     }
// }

const Card = ({card}) => {
  return (
    <div className='bg-[#f8f6f6] min-h-[300px] w-[250px] flex flex-col items-center shadow-md rounded-md hover:scale-110 transition-all ease-in-out'>
        <div className='w-[95%] m-1 rounded-md p-1 bg-[#eceaea] flex items-center justify-center'><img className='h-[200px] w-[70%]' src={card?.image} alt="" /></div>
        <div className='flex p-4 gap-2'>
            <div className='flex-2 flex-col'>
                <h2 className='font-semibold line-clamp-2 hover:line-clamp-none'>{card?.title}</h2>
                {/* rating */}
                <div className='text-xs flex py-2'>{
                    [1, 2, 3, 4, 5].map(item => (
                        <FaStar color={item <= Math.ceil(card?.rating?.rate) ? "000":"rgb(192, 192, 192"}/>
                    ))
                }</div>
                <div className='text-xs font-semibold text-slate-500'>$ {card?.price}</div>
            </div>
            <div className='flex-2'><button className='bg-blue-400 text-sm text-nowrap p-[8px] rounded-lg text-white'>Buy now</button></div>
        </div>
    </div>
  )
}

export default Card