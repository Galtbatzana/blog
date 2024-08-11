
const page = "/"

function Run() {
  const handleClick = (name) => {
    console.log(`hello! You close to success ${name}!`)
  }
  return (<div></div>);
}

export default function Page() {

  return (
    <div className="container mx-auto bg-white max-w-[1216px]">
      <div className="flex container mx-auto max-w-screen-sm">
        <div className="border-r-[1px] p-6 text-[36px] text-black">
          404: 
        </div>
        <div className="text-black p-6">
          <p className="font-bold">
            PAGE NOT FOUND
          </p>
          <p className="text-[#696A75] py-6">
            We're sorry, This page is unknown or does not exist the page you are looking for.
          </p>
          <button className="btn bg-[#4B6BFB] text-[#FFFFFF] mb-8 w-40 ml-6" onClick={Run()}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}