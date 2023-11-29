export default function RegisterPage() {
  return (
    <>
      <div className="flex mt-12">
        <div className=" w-1/3 flex flex-col pr-8 pt-6">
          <div>
            <h1 className="text-4xl font-medium">
              Welcome to <br />
              La Boucherie
            </h1>
          </div>
          <div>
            <p className="font-medium text-sm mt-3">
              Kindly invest a minute to enter the details and proceed with your
              account registration.
            </p>
          </div>
          <div className="text-lg font-medium mt-28">
            Already a User? <span className="text-primary">Login Here</span>
          </div>
          <div className="text-xl mt-16">
            <span className="text-primary">Click here</span> to create your new
            <span className="font-semibold"> Business Account.</span>
          </div>
        </div>
        <div className="w-2/3 px-4">
          <div className="border py-6 px-6 items-center justify-center register">
            <div>
              <h3 className="text-3xl font-medium">Register Here</h3>
            </div>
            <div className="flex flex-col space-y-4 mt-16">
              <input
                type="text"
                placeholder="First Name"
                className="border px-3 py-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border px-3 py-3 rounded-md"
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="Phone Number"
                className="border px-3 py-3 rounded-md"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="border px-3 py-3 rounded-md"
              />
              <div className="flex gap-8">
                <div className="w-1/2">
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                    className="border px-3 py-3 rounded-md w-full"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Confirm Password"
                    className="border px-3 py-3 rounded-md w-full"
                  />
                </div>
              </div>
            </div>
            <p className="font-medium mt-8">
              By Continuing, you agree to La Boucherie&apos;s
              <span className="text-primary"> Terms of Service</span> and
              acknowledge La Boucherie&apos;s{" "}
              <span className="text-primary"> Privacy Policy</span>.
            </p>
            <div className="mx-auto mt-8 flex items-center">
              {" "}
              <button className="mx-auto py-2 px-6 bg-primary hover:bg-white text-white hover:text-primary border border-primary hover:border hover:border-primary rounded-full">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
