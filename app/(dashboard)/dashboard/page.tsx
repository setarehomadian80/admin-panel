import { ChartNoAxesColumn, Sofa, Store, UsersRound } from "lucide-react";
import MultiActionAreaCard from "./chartBox";
import ProjectBox from "./projectBox";
import Order from "./order";
import DataBox from "./dataBox";

export default function dashboard() {
  return (
    <>
      <main>
        <div>
          <DataBox />
        </div>
        {/* ///////chartbox ////////*/}
        <div className="mt-16">
          <MultiActionAreaCard />
        </div>
        {/* /////////Projects//////// */}
        <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full *:w-full">
          <div className="lg:col-span-2">
            <ProjectBox />
          </div>
          {/* Orders overview */}
          <div className="mt-5 md:mt-0 lg:col-span-1 *:h-full">
            <Order />
          </div>
        </div>
      </main>
    </>
  );
}
