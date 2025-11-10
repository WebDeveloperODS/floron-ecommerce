import Image from "next/image";
import { Menu } from "../lib/menu";
import Link from "next/link";

export default async function Header(){
      return(
            <div className="flex border items-center justify-between w-full px-[3%]">
                  <Image src={'/images/floron-oil-logo.png'} className="w-auto h-24"  width={500} height={500} alt="Floron - Header logo"/>
                  <div className="flex gap-8">
                        {
                              Menu.map((item, index) => <Link className="" href={item.link} key={index}>{item.name}</Link>)
                        }
                  </div>
            </div>
      )
}