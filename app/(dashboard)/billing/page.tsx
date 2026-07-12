import { LucideIcon, Pencil, Wallet, Wifi } from "lucide-react";
import Image from "next/image";
import InvoicesCard from "./invoices";
import BillingInformation from "./billingInformation";
import TransactionsCard from "./yourTransaction";

type CardItem = {
  icon: LucideIcon;
  title: string;
  des: string;
  price: string;
};

const card: CardItem[] = [
  { icon: Wallet, title: "Salary", des: "Belong Interactive", price: "+$2000" },
  { icon: Wifi, title: "Paypal", des: "Freelance Payment", price: "$455.00" },
];

export default function page() {
  return (
    <div>
      {/* first section  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* right */}
        <div className="grid grid-cols-1 lg:col-span-2 gap-5">
          {/* cards */}
          <div
            className="grid grid-cols-1 xl:grid-cols-4 gap-5
            "
          >
            {/* black card */}
            <div
              className="bg-[#2c2c2f] p-5 rounded-xl flex
             flex-col justify-between gap-10
              col-span-1 xl:col-span-2 text-white relative
               "
            >
                <div className="absolute inset-0 bg-[url('/image/back.svg')] bg-cover bg-center opacity-20"></div>
              <span>
                <Wifi />
              </span>
              <pre>4562 1122 4594 7852</pre>
              <div className="flex items-center justify-between ">
                <div className="flex *:grid *:grid-cols-1 *:m-2">
                  <div>
                    <span>Card Holder</span>
                    <span>jack peterson</span>
                  </div>
                  <div>
                    <span>Expires</span>
                    <span>11/22</span>
                  </div>
                </div>
                {/* postcard.png image */}
                <div>
                  <Image
                    src="/image/mastercard.png"
                    width={50}
                    height={50}
                    alt="pic"
                  />
                </div>
              </div>
            </div>
            {/* Salary and paypal*/}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-5
            col-span-1 xl:col-span-2
            "
            >
              {card.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 flex flex-col
                     items-center justify-center gap-4
                      text-center col-span-1"
                  >
                    <div className="bg-[#3892ed] text-white p-3 rounded-lg">
                      <Icon />
                    </div>

                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-500">{item.des}</p>

                    <p className="border-t pt-3 w-full text-center font-semibold">
                      {item.price}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ///////////////////////////////////////////// */}
          {/* Payment Method */}
          <div>
            <div
              className="bg-white rounded-lg h-full
            p-5 col-span-1 md:col-span-2 lg:grid-cols-4 "
            >
              {/* top box */}
              <div className="flex justify-between items-center">
                <h2>Payment Method</h2>
                <button className="bg-[#212122] text-white text-[14px] p-2 rounded-lg">
                  +Add New Card
                </button>
              </div>
              {/* bottom box */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 mt-5 *:border
             *:flex *:justify-between *:items-center *:gap-2 *:py-5
             *:px-1 *:rounded-lg
             "
              >
                <div>
                  <Image
                    src="/image/mastercard.png"
                    width={50}
                    height={50}
                    alt="pic"
                    className="w-8 md:w-10"
                  />
                  <pre className="text-[12px] md:text-[16px]">
                    **** **** **** 7852
                  </pre>
                  <span className="cursor-pointer">
                    <Pencil size={18} />
                  </span>
                </div>
                <div>
                  <Image
                    src="/image/visa.png"
                    width={50}
                    height={50}
                    alt="pic"
                    className="w-8 md:w-10"
                  />
                  <pre className="text-[12px] md:text-[16px]">
                    **** **** **** 5248
                  </pre>
                  <span className="cursor-pointer">
                    <Pencil size={18} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* left */}
        <div className="lg:col-span-1">
          <InvoicesCard />
        </div>
      </div>
      {/* second section Billing Information and Your Transaction's */}
      <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-12 ">
        {/* Billing Information */}
        <div className="md:col-span-7">
          <BillingInformation />
        </div>
        {/* Your Transaction's */}
        <div className="md:col-span-5"> 
          <TransactionsCard />
        </div>
      </div>
    </div>
  );
}
