export function Header () {
    return (
        <div className="container mx-auto">
            <div className="flex bg-slate-200">
                <div className="">
                    <img src="/images/Logo.png"></img> 
                   
                </div>
                <div className="">
                   <Navigations />
                </div>
                <input type="text" className="grow" placeholder="Search" />
                  
            
            </div>
        </div>
    );
};


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
    }
];

export function Navigations () {

    return (
        <div className="flex">
            {navigations.map((nav)=>(
                <div key={nav.link} href={nav.link}>
                        {nav.name}
                </div>
            ))}
        </div>
    );
}