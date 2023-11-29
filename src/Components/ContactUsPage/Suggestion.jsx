export default function Suggestion() {
  const SubClasses = "text-xl font-semibold mb-1";
  return (
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
  );
}
