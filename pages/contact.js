export default function Contact() {
  return (
    <div className="container mx-auto bg-white max-w-[1216px]">
      <div className="container mx-auto max-w-4xl">
        <div className="container max-w-screen-sm w-full pb-9 mx-auto">
          <div className="">
            <h2 className="text-[#000000] text-[36px] font-bold p-4">
              Contact us
            </h2>
            <p className="text-[#696A75] m-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className=" flex justify-around">
            <div className="box-content border-2 rounded-md ml-4">
              <p className="text-[#000000] text-[24px] font-bold m-4">Adress</p>
              <p className="text-[#696A75] m-4">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="box-content border-2 rounded-md mx-6">
              <p className="text-[#000000] text-[24px] font-bold m-4">
                Contact
              </p>
              <p className="text-[#696A75] m-4">313-332-8662 info@email.com</p>
            </div>
          </div>
        </div>

        <div className="mx-auto bg-[#F6F6F7] flex flex-col max-w-screen-sm w-full ">
          <p className="text-[26px] text-[#000000] font-bold pl-6 py-4">
            Leave messege
          </p>
          <div className="flex">
            <input
              type="text"
              className="w-[50%] bg-white input input-bordered mx-6"
              placeholder="Your name"
            />
            <input
              type="text"
              className="w-[50%] bg-white input input-bordered mx-6"
              placeholder="Email"
            />
          </div>

          <input
            type="text"
            className="grow bg-white input input-bordered m-6"
            placeholder="Subject"
          />

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-full max-w-xs bg-white m-6"
          />

          <button className="btn bg-[#4B6BFB] text-[#FFFFFF] mb-8 w-40 ml-6">
            Send messege
          </button>
        </div>
      </div>
    </div>
  );
}
