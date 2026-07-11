import { Archive, Bell, CreditCard, Key, Server } from "lucide-react";

const data = [
  {
    icon: Bell,
    text: "$2400, Design changes",
    span: "22 DEC 7:20 PM",
    bg: "green",
  },
  {
    icon: Archive,
    text: "New order #1832412",
    span: "21 DEC 11 PM",
    bg: "#f44335",
  },
  {
    icon: Server,
    text: "Server payments for April",
    span: "21 DEC 9:34 PM",
    bg: "#1a73e8",
  },
  {
    icon: CreditCard,
    text: "New card added for order #4395133",
    span: "20 DEC 2:20 AM",
    bg: "#fb8c00",
  },
  {
    icon: Key,
    text: "New card added for order #4395133",
    span: "18 DEC 4:54 AM",
    bg: "#e91e63",
  },
];

export default function Order() {
  return (
    <div
      className="bg-white rounded-xl
         p-5 shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"
    >
      <div>
        <h1 className="text-xl font-bold">Orders overview</h1>
        <p> 24% this month</p>
      </div>
      {/* body */}
      <div className="*:my-5">
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex items-center gap-3 ">
              {/* icon */}
              <div
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100"
                style={{
                  backgroundColor: item.bg, // رنگ با شفافیت کم
                }}
              >
                <Icon size={18} style={{ color: "white" }} />
              </div>

              {/* text */}
              <div className="flex flex-col *:my-1">
                <h2 className="text-gray-800 text-[16px] font-bold">
                  {item.text}
                </h2>

                <span className="text-xs text-gray-400">{item.span}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
