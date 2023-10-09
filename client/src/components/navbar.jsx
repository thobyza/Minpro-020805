import appLogo from '../assets/logo-full.png'
import { ButtonNav } from './buttonNav'

export const Navbar = () => {
    let Links = [
        {name: "Home", link: "/"},
        {name: "Create Events", link: "/"},
        {name: "Discover", link: "/"},
    ]


    return (
        <nav className="p-4">
            <div className="flex">
                <div className="z-10">
                    <img src={appLogo} alt="" className="h-11"/>
                </div>
                <div className="flex flex-col flex-grow w-full md:flex-row flex-grow items-end md:justify-end md:items-center
                 absolute bg-white md:z-auto z-0 right-0 pr-4 transition-all duration-500 ease-in">
                    <ButtonNav className=""/>
                    <ul className="flex flex-col md:flex-row items-end md:items-center md:justify-center gap-2 mt-4 md:mt-0 md:mr-4">
                        {
                            Links.map((link) => (
                                <li>
                                    <a href={link.link} className="text-gray-700 hover:text-accent-green-1 duration-500">{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="flex flex-col md:flex-row items-end md:items-center md:justify-center gap-2 mt-4 pb-4">
                        <li>
                            <a href="" className="text-gray-700 ">Sign in</a>
                        </li>
                        <li>
                            <a href="" className="text-gray-700 ">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}