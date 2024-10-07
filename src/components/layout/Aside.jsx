import UserCard from "../cards/UserCard";
import AsideButton from "../buttons/AsideButton";

function Aside() {
  return (
    <aside className="h-full w-1/4 bg-red-300">
      <div className="h-[10%] bg-[#6c59d6] flex justify-between items-center px-4 shadow-xl">
        <a href="#">
          <i className="fa-brands fa-squarespace text-white text-6xl"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-bars-staggered text-white text-4xl font-bold hover:text-gray-300"></i>
        </a>
      </div>
      <div className="bg-[#424A9B] h-[90%] flex flex-col justify-evenly">
        <UserCard name="Khalid Marzoug" email="khalid_marzoug@outlook.fr" />
        <div className="h-5/6 w-5/6 mx-auto p-4">
          <h1 className="text-gray-200 font-extrabold my-3">MAIN</h1>
          <AsideButton icon={{type: "fa-solid", icon: "fa-gauge"}} content="Dashbord" haveArrow={false} />
          <AsideButton icon={{type: "fa-brands", icon: "fa-squarespace"}} content="Layout" haveArrow={true} />
          <AsideButton icon={{type: "fa-brands", icon: "fa-wpforms"}} content="Forms" haveArrow={true} />
          <AsideButton icon={{type: "fa-solid", icon: "fa-table"}} content="Tables" haveArrow={true} />
          <AsideButton icon={{type: "fa-regular", icon: "fa-file-lines"}} content="Pages" haveArrow={true} />

          <h1 className="text-gray-200 font-extrabold my-3">APPS</h1>
          <AsideButton icon={{type: "fa-regular", icon: "fa-paper-plane"}} content="Mail" haveArrow={false} />
          <AsideButton icon={{type: "fa-regular", icon: "fa-calendar"}} content="Calendar" haveArrow={false} />
          <AsideButton icon={{type: "fa-solid", icon: "fa-hippo"}} content="Invacost" haveArrow={true} />
        </div>
      </div>
    </aside>
  );
}

export default Aside;
