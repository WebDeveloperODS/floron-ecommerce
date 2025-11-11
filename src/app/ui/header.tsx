import Image from "next/image";
import { Menu } from "../lib/menu";
import Link from "next/link";
import { BsHandbagFill } from "react-icons/bs";

export default async function Header(){
      return(
            <div className={`absolute top-0 left-0 flex border items-center justify-between lg:grid lg:grid-cols-[15%_60%_15%] w-full px-[3%]`}>
                  <Image src={'/images/floron-oil-logo.png'} className="w-auto h-24"  width={500} height={500} alt="Floron - Header logo"/>
                  <div className="flex items-center justify-center gap-8">
                        {
                              Menu.map((item, index) => <Link className="" href={item.link} key={index}>{item.name}</Link>)
                        }
                  </div>
                  <div className="flex justify-end items-center gap-4">
                        <BsHandbagFill className="h-5 w-auto"/>
                  </div>
            </div>
      )
}