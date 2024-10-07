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
                <MainCard icon={{type:"fa-regular", icon:"fa-eye", color:"text-blue-300"}} content="Impressions" statistique={{statistique: 9500, color: "text-blue-800"}} position={0.03} />
                <MainCard icon={{type:"fa-solid", icon:"fa-computer-mouse", color:"text-blue-800"}} content="Clicks" statistique={{statistique: 4300, color:"text-lime-950"}} position={2.78} />
                <MainCard icon={{type:"fa-solid", icon:"fa-magnet", color:"text-green-300"}} content="Engagements" statistique={{statistique:21000,color:"text-green-800"}} position={-2.01} />
                <MainCard icon={{type:"fa-solid", icon:"fa-camera-retro", color:"text-purple-300"}} content="Posts" statistique={{statistique:147, color:"text-purple-800"}} position={1.02} />
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
