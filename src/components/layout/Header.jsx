import HeaderButton from "../buttons/HeaderButton";
import Search from "../inputs/Search";

function Header() {
  return (
    <header className="flex h-[10%] justify-between px-5 items-center shadow-md w-full">
      <Search />
      <div className="flex gap-2 items-center">
        <HeaderButton icon={{ type: "fa-solid", icon: "fa-bars" }} number="2" />
        <HeaderButton
          icon={{ type: "fa-regular", icon: "fa-bell" }}
          number="7"
        />
        <HeaderButton
          icon={{ type: "fa-regular", icon: "fa-envelope" }}
          number="5"
        />

        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 relative top-[-5px] mx-4"
          src="/assets/profile.png"
          alt="profile picture"
        />
      </div>
    </header>
  );
}

export default Header;
