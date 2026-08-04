import Header from "../Components/Header";

function Frontend({ children }) {
  return (
    <div className="w-full min-w-30 h-full relative   flex flex-col scroll-smooth ">
      <header className="w-full min-w-50 h-10 bg-linear-to-b from-zinc-800 to-slate-800 p-10">
        <Header />
      </header>
      <main className="w-full min-w-50 h-auto flex-1 mt-1rem">
        {children}
      </main>
      <footer className="w-full min-h-10 border bg-[#0F3040]">
          <p className=" text-[#C3110C] text-xl text-center">@copyright 2026 Reserved All Rights</p>
        </footer>
    </div>
  );
}

export default Frontend;
