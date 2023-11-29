export default function RegisterForm()
{
    return (
      <div className="flex flex-col space-y-4 mt-10">
        <input
          type="text"
          placeholder="First Name"
          className="border px-3 py-3 rounded-md outline-primary"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border px-3 py-3 rounded-md outline-primary"
        />
        <input
          type="number"
          name=""
          id=""
          placeholder="Phone Number"
          className="border px-3 py-3 rounded-md outline-primary"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="border px-3 py-3 rounded-md outline-primary"
        />
        <div className="flex gap-8">
          <div className="w-1/2">
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="border px-3 py-3 rounded-md w-full outline-primary"
            />
          </div>
          <div className="w-1/2">
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
              className="border px-3 py-3 rounded-md w-full outline-primary"
            />
          </div>
        </div>
      </div>
    );
}