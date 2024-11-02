import { Button } from "./ui/Button";
import Navlink from "./Navlink";
export default function Navbar() {
  return (
    <div className="w-full flex justify-between p-2 bg-primary border-b border-slate-700">
      <div className="w-2/3 my-auto flex justify-evenly">
        <h1 className="text-xl">{"<Arbima />"}</h1>
        <div className="w-1/2">
          <Navlink />
        </div>
      </div>
      <div className="w-1/3 my-auto flex">
        <Button asChild>
          <a
            className="rounded-md
            before:ease relative mx-auto py-2 px-4 overflow-hidden border border-accent bg-accent  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-40 before:duration-1000 hover:before:-translate-x-40"
            href="https://instagram/arbima12"
          >
            Resume
          </a>
        </Button>
      </div>
    </div>
  );
}
