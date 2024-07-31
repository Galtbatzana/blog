import Link from "next/link";

export function Tolgoi() {
  return (
    <div className="container mx-auto bg-white ">
      <div className="flex justify-around items-center py-9">
        <img src="/images/Logo.png" className="h-[36px]" />
        <Navigations />
        <input type="text" className="bg-slate-200" placeholder="Search" />
      </div>
    </div>
  );
}

const navigations = [
  {
    name: "Home",
    link: "/home",
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
