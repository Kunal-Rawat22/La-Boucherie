import Fb from "../Icons/Fb";
import Insta from "../Icons/Insta";
import LinkedIn from "../Icons/LinkedIn";
import Twitter from "../Icons/Twitter";

export default function ContactUs() {
  const SubClasses = "text-xl font-semibold mb-1";
  return (
    <div className="flex justify-between">
      <div className="w-1/3">
        <h3 className="text-3xl font-medium mb-6">Our Information</h3>
        <div className="mb-4">
          <h4 className={SubClasses}>ADDRESS</h4>
          <p className="font-light">
            BPIT, PSP-4, Dr KN Katju Marg, Sector 17, Rohini, Delhi 110089
          </p>
        </div>
        <div className="mb-4">
          <h5 className={SubClasses}>E-MAIL ADDRESS</h5>
          <p className="font-light">kunal.rawat.official@gmail.com</p>
        </div>
        <div className="mb-4">
          <h5 className={SubClasses}>PHONE NUMBER</h5>
          <p className="font-light">+91 99111-36266</p>
        </div>
        <div className="mb-4">
          <h5 className={SubClasses}>Our Socials</h5>
          <div className="flex space-x-3 justify-start">
            <Fb classname={"w-6 hover:fill-primary cursor-pointer"} />
            <Insta classname={"w-6 hover:fill-primary cursor-pointer"} />
            <Twitter classname={"w-6 hover:fill-primary cursor-pointer"} />
            <LinkedIn classname={"w-6 hover:fill-primary cursor-pointer"} />
          </div>
        </div>
      </div>
      <div className="w-1/3 px-5 py-2">
        <div className="flex flex-col border h-full rounded-lg shadow-2xl">
          <div class="py-3 text-center border-b bg-gray-100">
            <h4 className={SubClasses}>Suggestion</h4>
          </div>
          <div class="flex flex-col space-y-2 px-4 py-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className=" border border-gray-400 px-1 py-1 rounded-md"
            />
            <input
              type="text"
              name="phn-no"
              placeholder="Phone No."
              className=" border border-gray-400 px-1 py-1 rounded-md"
            />
            <input
              type="text"
              name="e-add"
              placeholder="Email Address"
              className=" border border-gray-400 px-1 py-1 rounded-md"
            />
            <textarea
              type="text"
              name="msg"
              placeholder="Message"
              cols="30"
              rows="3"
              className=" border border-gray-400 px-1 py-1 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 text-xl rounded-lg"
            >
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
