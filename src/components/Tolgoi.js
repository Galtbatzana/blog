export function Tolgoi() {
  return (
    <div className="">
        <div className="flex justify-between my-20 w-[1000px]">
            <div> <img src="/images/Logo.png" className="ml-10 bg-white" /></div>
            <div>   <Navigations /></div>
            <div>  <input type="text" className="" placeholder="Search" /></div>
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
    <div className="flex gap-6">
      {navigations.map((nav) => (
        <div key={nav.link} href={nav.link}>
          {nav.name}
        </div>
      ))}
    </div>
  );
}
