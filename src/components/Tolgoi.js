import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiSunDimFill } from "react-icons/pi";

export function Tolgoi() {
  return (
    <div className="container mx-auto bg-white flex justify-between items-center max-w-[1216px]">
      <div className="flex justify-around items-center py-9 mx-4">
        <img src="/images/Logo.png" className="h-[36px]" />
        <div className="hidden md:block pl-6">
          <Navigations />
        </div>
      </div>
      <div className="flex md:flex-1 md:justify-end">
        <input
          type="text"
          className="bg-slate-200 hidden md:block"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center px-6">
        <PiSunDimFill className="text-[#141624] text-[20px]"/>
        <GiHamburgerMenu className="text-[32px] text-[#141624] mx-6" />
      </div>
    </div>
  );
}

const navigations = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export function Navigations() {
  return (
    <div className="flex gap-6 text-[#3B3C4A] font-medium">
      {navigations.map((nav) => (
        <Link key={nav.link} href={nav.link}>
          {nav.name}
        </Link>
      ))}
    </div>
  );
}

export function Navigationrow() {
  return (
    <div className="flex flex-col gap-6 text-[#3B3C4A] font-medium">
      {navigations.map((nav) => (
        <Link key={nav.link} href={nav.link}>
          {nav.name}
        </Link>
      ))}
    </div>
  );
}