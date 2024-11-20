export function NavBar() {
  return (
    <nav className="nav-bar font-[Poppins] h-20 flex flex-row justify-between items-center px-6 py-3 lg:px-[120px] lg:py-4 bg-[#F9F8F6] border-solid border-b-2 border-[#DAD6D1]">
      <h1 className="logo text-2xl font-bold">
        hh<span className="text-green-400">.</span>
      </h1>
      <div className="button-bar flex gap-8">
        <button class="hamburger-button lg:hidden">
          <div class="w-6 h-0.5 bg-gray-400 mb-1"></div>
          <div class="w-6 h-0.5 bg-gray-400 mb-1"></div>
          <div class="w-6 h-0.5 bg-gray-400"></div>
        </button>
        <button className="log-in hidden lg:block border-2 bg-white border-solid border-[#DAD6D1]  rounded-3xl px-10 py-4">
          log in
        </button>
        <button className="sign-in hidden lg:block bg-black text-white  rounded-3xl px-10 py-4">
          sign in
        </button>
      </div>
    </nav>
  );
}
