import { redirect  } from "next/navigation";


type Props = {
    navColor: string;
};

export default function Home({ navColor }: Props) {
 
  redirect("/sign-in")
  

}
