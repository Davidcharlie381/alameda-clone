"use client"


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for submitting! We promise not to reach out.");
  };

  return (
    <main className="container grid md:grid-cols-2 gap-10 md:gap-16 pt-14 md:pt-20 pb-20">
      <div>
        <h2 className="text-[28px] leading-[37px] md:text-[35px] md:leading-[47px] font-medium font-roboto mb-10">
          Contact us
        </h2>
        <p className="text-base font-light leading-[29px] mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="text-base font-light leading-[29px] mb-5">
          Clothing Courtesy of Lauren Winter, Kinem and ULIHU
        </p>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className="text-base text-gray-700 space-y-4">
          <label className="">
            Name <span className="text-gray-700/80 font-light">(required)</span>
          </label>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6">
              <label htmlFor="firstName" className="block mb-2">
                First name
              </label>

              <input
                className="w-full focus:ring-2 ring-black ring-offset-2 block border border-gray-400/70 bg-gray-100/60 outline-none p-3"
                id="firstName"
                type="text"
                required
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="lastName" className="block mb-2">
                Last name{" "}
              </label>

              <input
                className="w-full focus:ring-2 ring-black ring-offset-2 block border border-gray-400/70 bg-gray-100/60 outline-none p-3"
                id="lastName"
                type="text"
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email{" "}
                <span className="text-gray-700/80 font-light">(required)</span>
              </label>

              <input
                className="w-full focus:ring-2 ring-black ring-offset-2 block border border-gray-400/70 bg-gray-100/60 outline-none p-3"
                id="email"
                type="email
                required"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="subject" className="block mb-2">
                Subject{" "}
                <span className="text-gray-700/80 font-light">(required)</span>
              </label>

              <input
                className="w-full focus:ring-2 ring-black ring-offset-2 block border border-gray-400/70 bg-gray-100/60 outline-none p-3"
                id="subject"
                type="text"
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message{" "}
                <span className="text-gray-700/80 font-light">(required)</span>
              </label>

              <textarea
                className="w-full h-40 focus:ring-2 ring-black ring-offset-2 block border border-gray-400/70 bg-gray-100/60 outline-none p-3"
                id="message"
                type="text"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-black/40  w-[130px] py-5 text-white font-poppins font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
