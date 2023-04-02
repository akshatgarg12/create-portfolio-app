const Contact = () => {
    return (
        <div className="block max-w-sm rounded-lg text-altText p-6 m-auto">
        <form>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline outline-slate-400 outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Name" />
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >Name
            </label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline  outline-slate-400 outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Email address" />
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >Email address
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-button px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-button-700 hover:shadow-lg focus:bg-button-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-button-800 active:shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light">
            Subscribe
          </button>
        </form>
        </div>
    );
}
 
export default Contact;