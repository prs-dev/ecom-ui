import { CiSearch } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { FaEllipsisV } from "react-icons/fa";
import Avatar from '../avatar.png'
import Card from "./Card";
import { baseUrl } from "../constants";
import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";

const Display = () => {
    const [products, setProducts] = useState([])
    const [filtered, setFiltered] = useState({})
    const [searchTerm, setSearchTerm] = useState('')
    const [searchData, setSearchData] = useState(null)
    const [bestProducts, setBestProducts] = useState([])
    const [cat, setCat] = useState('')
    const [filterItems, setFilterItems] = useState(null)
    const [toggle, setToggle] = useState(false)

    const paginatedProducts = (page, limit, arr) => {
        const start = (page - 1) * limit
        const end = page * limit
        const results = {}
        if (end < arr?.length) {
            results.next = {
                page: page + 1,
                limit
            }
        }
        if (start > 0) {
            results.prev = {
                page: page - 1,
                limit
            }
        }
        results.data = arr?.slice(start, end)
        return results
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${baseUrl}/products`, {
                    "content-type": "application/json"
                })
                const data = await res.json()
                setProducts(data)
                localStorage.setItem("products", JSON.stringify(data))
                setFiltered(paginatedProducts(1, 4, data))
                randomProducts(data)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${baseUrl}/products/category/${cat}`, {
                    "content-type": "application/json"
                })
                const data = await res.json()
                setFilterItems(data)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchData()
    }, [cat])

    const randomProducts = (arr) => {
        const randomNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * arr.length));
        const randomProducts = randomNumbers.map(item => arr[item])
        setBestProducts(randomProducts)
    }


    // console.log(products, filtered, searchData)
    console.log(filterItems)
    return (
        <div className='flex-1 p-4 flex flex-col gap-8'>
            <div className="flex items-center justify-between">
                {/* search bar */}
                <div className="flex">
                    <input type="text" className="h-8 w-[250px] rounded-l-md shadow-md" onChange={e => {
                        // console.log(filtered)
                        // console.log(filtered?.data?.filter(item => item?.title?.toLowerCase()?.includes(e.target.value.toLowerCase())))
                        const results = e.target.value === '' ? null : filtered?.data?.filter(item => item?.title?.toLowerCase()?.includes(e.target.value.toLowerCase()))
                        setSearchData(results)
                    }} />
                    <div className="bg-blue-400 shadow-md hover:cursor-pointer hover:bg-blue-800 w-[50px] rounded-r-md flex items-center justify-center text-white font-bold"><CiSearch size={20} /></div>
                </div>

                {/* filter */}

                {/* icons */}
                <div className="flex items-center gap-8">
                    <div><MdOutlineSpaceDashboard size={28} /></div>
                    <div className="flex relative">
                        <CiBellOn size={30} />
                        <span className="px-1 rounded-full bg-blue-400 absolute top-[-10px] right-[-10px]">4</span>
                    </div>
                    <div>
                        <FaEllipsisV size={20} />
                    </div>
                    <div>
                        <img className="w-[35px]" src={Avatar} alt="" />
                    </div>
                </div>
            </div>
            {filterItems && <h1 className="text-2xl text-slate-500 font-semibold px-2">filtered</h1>}

            {filterItems && <div className="p-2 flex gap-8 items-center justify-center">
                {filterItems?.map(item => <Card card={item} />)}
            </div>}
            {searchData && <h1 className="text-2xl text-slate-500 font-semibold px-2">Searched</h1>}

            {searchData && <div className="p-2 flex gap-8 items-center justify-center">
                {searchData?.map(item => <Card card={item} />)}
            </div>}
            <div className="flex items-center justify-between">
                {!searchData && !filterItems && <h1 className="text-2xl text-slate-500 font-semibold px-2">Product</h1>}
                {!searchData && <div className="relative" onClick={() => setToggle(!toggle)}>
                    <div className={`flex ${toggle ? 'bg-slate-500 p-2 text-white': ""} gap-1 items-center z-10 hover:cursor-pointer hover:bg-slate-400 hover:p-2 hover:text-white`}>
                        <h2>Filters</h2>
                        <span><CiFilter size={20} /></span>
                    </div>
                    {toggle && <div className="absolute bg-white p-2">
                        <div>
                            <label>Electronics</label>
                            <input type="radio" name="" id="" checked={cat === 'electronics'} onChange={e => setCat('electronics')} />
                        </div>
                        <div>
                            <label>Jewellery</label>
                            <input type="radio" name="" id="" checked={cat === 'jewelery'} onChange={e => setCat('jewelery')} />
                        </div>
                        <div>
                            <label>Men</label>
                            <input type="radio" name="" id="" checked={cat === 'men\'s clothing'} onChange={e => setCat('men\'s clothing')} />
                        </div>
                        <div>
                            <label>Women</label>
                            <input type="radio" name="" id="" checked={cat === 'women\'s clothing'} onChange={e => setCat('women\'s clothing')} />
                        </div>
                    </div>}
                </div>
                }
            </div>
            {!searchData && !filterItems && <div className="flex gap-8 items-center justify-center flex-col">
                {/* product */}
                <div className="flex gap-8">
                    {/* <Card />
            <Card />
            <Card />
            <Card /> */}
                    {filtered?.data?.map(item => <Card card={item} />)}
                </div>
                {/* pagination */}
                <div className="flex gap-4 self-end px-4">
                    {Object.keys(filtered).includes("prev") && <div
                        onClick={() => {
                            const prev = paginatedProducts(filtered?.prev?.page, filtered?.prev?.limit, products)
                            setFiltered(prev)
                        }}
                        className="text-sm border w-[40px] text-center border-slate-500 p-1 rounded-md hover:bg-slate-500 hover:text-white hover: cursor-pointer">prev</div>}
                    {/* <div className="text-sm border w-[40px] text-center border-slate-500 p-1 rounded-md">1</div>
                <div className="text-sm border w-[40px] text-center border-slate-500 p-1 rounded-md">2</div>
                <div className="text-sm border w-[40px] text-center border-slate-500 p-1 rounded-md">3</div>
                <div className="text-sm border w-[40px] text-center border-slate-500 p-1 rounded-md">4</div> */}
                    {Object.keys(filtered).includes("next") && <div
                        onClick={() => {
                            const next = paginatedProducts(filtered?.next?.page, filtered?.next?.limit, products)
                            setFiltered(next)
                        }}
                        className="text-sm border w-[40px] text-center border-slate-500 p-1 rounded-md hover:bg-slate-500 hover:text-white hover: cursor-pointer">next</div>}
                </div>
            </div>}
            {!searchData && !filterItems && <h1 className="text-2xl text-slate-500 font-semibold px-2">Best Products</h1>}
            {!searchData && !filterItems && <div className="flex gap-8 items-center justify-center">
                {/* best product */}
                {/* <Card />
            <Card />
            <Card />
            <Card /> */}
                {bestProducts?.map(item => <Card card={item} />)}
            </div>}
        </div>
    )
}

export default Display