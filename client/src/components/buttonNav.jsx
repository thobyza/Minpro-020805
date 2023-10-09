import dropdownToggle from '../assets/dropdown-nav.svg'

export const ButtonNav = (props) => {
    return (
        <button className="md:order-last md:ml-6 xl:hidden">
            <img src={dropdownToggle} alt="" cl assName="md:hidden hover:fill-accent-green-1 duration-500"></img>
            {props.children}
        </button>
    )
}