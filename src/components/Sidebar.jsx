import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

const active = 'product'
const Sidebar = () => {

    return (
            <div className='pattern relative min-w-[300px] shadow-[3px_0px_5px_rgba(0,0,0,0.2)] p-5 rounded-tr-[30px] rounded-br-[30px]  rounded-md text-white'>
                <h1 className='text-3xl tracking-widest'>Ecommerce</h1>
                <ul className='flex flex-col items-left mt-10 gap-5'>
                    <li className='flex items-center gap-5 font-semibold hover:cursor-pointer'>
                        <MdOutlineSpaceDashboard />
                        <span>Dashboard</span>
                    </li>
                    <li className={`flex items-center gap-5 font-semibold hover:cursor-pointer ${active === 'discover' && 'bg-white rounded-md p-2 text-slate-500 mr-[-30px]'}`}>
                        <CiSearch />
                        <span>Discover</span>
                    </li>
                    <li className={`flex items-center gap-5 font-semibold hover:cursor-pointer ${active === 'product' && 'bg-white rounded-md p-2 text-slate-500 mr-[-30px]'}`}>
                        <IoBagOutline />
                        <span>Product</span>
                    </li>
                    <li className='flex items-center gap-5 font-semibold hover:cursor-pointer'>
                        <CiShoppingCart />
                        <span>Product Sale</span>
                    </li>
                    <li className='flex items-center gap-5 font-semibold hover:cursor-pointer'>
                        <RiTeamLine />
                        <span>Teams</span>
                    </li>
                    <li className='flex items-center gap-5 font-semibold hover:cursor-pointer'>
                        <FaChartBar />
                        <span>List</span>
                    </li>
                    <li className='flex items-center gap-5 font-semibold hover:cursor-pointer'>
                        <MdOutlineEmail />
                        <span>Email</span>
                    </li>
                    <li className='flex items-center gap-5 font-semibold hover:cursor-pointer'>
                        <IoBagCheckOutline />
                        <span>Checkout</span>
                    </li>

                    {/* <li>Discover</li>
            <li>Product</li>
            <li>Product Sale</li>
            <li>Team</li>
            <li>List</li>
            <li>Email</li>
            <li>Checkout</li> */}
                </ul>
                {/* <div className='absolute bottom-0 pattern h-[400px] w-[400px]'>
                </div> */}
            </div>

    )
}

export default Sidebar