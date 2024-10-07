import Header from "./Header";
import MainCard from "../cards/MainCard";

function Main() {


  return (
    <main className="h-full w-3/4 flex flex-col bg-gray-50">
        <Header />
        <main className="p-10 flex flex-col gap-5 justify-between h-[90%]">
            <div>
                <h1 className="text-7xl font-light">Dashboard</h1>
                <h3 className="text-xl">This is how your company is doing it</h3>
            </div>
            <div className="flex gap-4 w-full justify-evenly">
                <MainCard icon={{type:"fa-solid", icon:"fa-test"}} content="Impressions" statistique={100} position={0.02} />
                <MainCard icon={{type:"fa-solid", icon:"fa-test"}} content="Clicks" statistique={100} position={0.02} />
                <MainCard icon={{type:"fa-solid", icon:"fa-test"}} content="Engagements" statistique={100} position={0.02} />
                <MainCard icon={{type:"fa-solid", icon:"fa-test"}} content="Posts" statistique={100} position={0.02} />
            </div>
            <div className="bg-white p-5 rounded-md">
                <h1 className="text-3xl">Total Audience By Region</h1>
                <h3 className="text-xl">Where you visitore are coming from</h3>
            </div>
        </main>
    </main>
  );
}

export default Main;
