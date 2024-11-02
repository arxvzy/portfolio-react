import { TypeAnimation } from "react-type-animation";
import sectionImage from "../assets/section.png";
export default function Home() {
  return (
    <div className="w-full mt-20 flex">
      <div className="w-1/2 my-auto flex justify-end">
        <title>Arya Bima's Portfolio</title>
        <div className="w-1/2">
          <p className="text-2xl">Hello, I'm</p>
          <h1 className="text-5xl">Arya Bima</h1>
          <TypeAnimation
            sequence={["Fullstack Developer", 500, "IT Network Engineer", 500]}
            className="md:text-3xl text-2xl bg-gradient-to-r from-teal-400 to-lime-400 via-lime-400 bg-clip-text text-transparent"
            repeat={Infinity}
          />
          <p className="mt-2">Welcome To My Portfolio :)</p>
        </div>
      </div>
      <div className="w-1/3 my-auto flex">
        <img src={sectionImage} className="w-1/2" />
      </div>
    </div>
  );
}
