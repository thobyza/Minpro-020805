
import dropdownToggle from "../assets/dropdown-nav.svg";

export const ButtonNav = (props) => {
  return (
    <button className="h-11 w-11 rounded-xl bg-accent-grey-1 md:order-last md:ml-6 lg:hidden">
      <i class="ri-menu-fill text-2xl text-white duration-500 hover:fill-accent-green-1 "></i>
      {props.children}
    </button>
  );
};
