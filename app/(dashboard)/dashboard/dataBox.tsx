import { ChartNoAxesColumn, Sofa, Store, UsersRound } from "lucide-react";

const cardDetails = [
  {
    id: 1,
    icon: Sofa,
    span: "Booking",
    strong: "281",
    num: "+55%",
    text: " than lask week",
  },
  {
    id: 2,
    icon: ChartNoAxesColumn,
    span: "Users",
    strong: "2,300",
    num: "+3%",
    text: " than last month",
  },
  {
    id: 3,
    icon: Store,
    span: "Revenue",
    strong: "34K",
    num: "+1%",
    text: "  than yesterday",
  },
  {
    id: 4,
    icon: UsersRound,
    span: "Followers",
    strong: "+91",
    num: null,
    text: " than yesterday",
  },
];

export default function DataBox() {
  return (
    <>
      <div
        className=" w-full
         grid grid-cols-1
         md:grid-cols-2
         lg:grid-cols-4
          gap-10 
     "
      >
        {/* small box */}
        {cardDetails.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.id}
              className="
              shadow-[4px_4px_4px_rgba(0,0,0,0.25)]
              p-5
              bg-white
              dark:bg-[#202940]
              dark:text-white
              dark:shadow-[4px_4px_20px_rgba(0,0,0,0.35)]
              rounded-[12px]
                "
            >
              <div className="relative flex justify-between">
                <div >
                  <div className="bg-[#df2869] w-14 h-14 rounded-[10px] flex justify-center items-center absolute z-10 -top-10 ">
                    <Icon />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span>{card.span}</span>
                  <strong className="text-2xl">{card.strong}</strong>
                </div>
              </div>
              <div className="border-t mt-3 pt-3">
                <p>
                  <span className="text-[#5bb35f] font-bold">{card.num}</span>
                  {card.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
