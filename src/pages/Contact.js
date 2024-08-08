export default function Contact() {
  return (
    <div className="container mx-auto bg-yellow-200">
      <div className="container mx-auto m-12 px-72">
        <div className="container">
          <div className="m-6">
          <h2 className="text-[#000000] text-[36px] font-bold">Contact us</h2>
          <p className="text-[#696A75]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <div className="m-6 flex justify-around">
            <div className="">
              <p className="text-[#000000] text-[24px] font-bold">Adress</p>
              <p className="text-[#696A75]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div>
              <p className="text-[#000000] text-[24px] font-bold">Contact</p>
              <p className="text-[#696A75]">313-332-8662
              info@email.com</p>
            </div>
          </div>
        </div>
        <div className="m-6 bg-[#F6F6F7] flex flex-col">
          <p className="text-[26px] text-[#000000] font-bold">Leave messege</p>
          <div className="flex gap-4 m-6">
           <input type="text" className="grow bg-white input input-bordered" placeholder="Your name" /> 
           <input type="text" className="grow bg-white input input-bordered" placeholder="Email" />
          </div>
          
          <input type="text" className="grow bg-white input input-bordered m-6" placeholder="Subject" />
          
          <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs bg-white m-6" />
          
          <button className="btn bg-[#4B6BFB] text-[#FFFFFF]">Send messege</button>
        </div>


      </div>
    </div>
  );
}