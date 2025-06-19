import { BiLogOut } from "react-icons/bi"
import { FaDollarSign } from "react-icons/fa"
import { FaShop } from "react-icons/fa6"
import { LuUserRound } from "react-icons/lu"
import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (
        <aside className="w-64 bg-base-200 min-h-screen p-4 shadow-xl flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-primary mb-4 px-2">Dashboard</h2>

            <ul className="menu text-base-content">
                <li>
                    <Link to="me" className="flex items-center gap-3 hover:bg-base-300 rounded-lg px-3 py-2">
                        <LuUserRound className="text-orange-500 text-lg" />
                        <span>My Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="orders" className="flex items-center gap-3 hover:bg-base-300 rounded-lg px-3 py-2">
                        <FaShop className="text-orange-500 text-lg" />
                        <span>Orders</span>
                    </Link>
                </li>
                <li>
                    <Link to="payments" className="flex items-center gap-3 hover:bg-base-300 rounded-lg px-3 py-2">
                        <FaDollarSign className="text-orange-500 text-lg" />
                        <span>Payments</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="flex items-center gap-3 hover:bg-base-300 rounded-lg px-3 py-2">
                        <BiLogOut className="text-red-600 text-lg" />
                        <span>Logout</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex items-center gap-3 hover:bg-base-300 rounded-lg px-3 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15 21v-8a1 1 0 00-1-1h-4a1 1 0 00-1 1v8" />
                            <path d="M3 10a2 2 0 01.709-1.528l7-5.999a2 2 0 012.582 0l7 5.999A2 2 0 0121 10v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                        <span>Home</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
