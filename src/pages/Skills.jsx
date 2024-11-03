import { Helmet } from "react-helmet";
import htmlImage from "../assets/html.svg";
import cssImage from "../assets/css.svg";
import jsImage from "../assets/js.svg";
import tailwindImage from "../assets/tailwind.svg";
import shadcnImage from "../assets/shadcn.svg";
import viteImage from "../assets/vite.svg";
import reactImage from "../assets/react.svg";
import nodeImage from "../assets/node.svg";
import expressImage from "../assets/express.svg";
import mysqlImage from "../assets/mysql.svg";
import mongoImage from "../assets/mongo.svg";
import prismaImage from "../assets/prisma.png";
import phpImage from "../assets/php.svg";
import laravelImage from "../assets/laravel.svg";

import SkillsList from "../components/SkillsList";

const frontEndSkills = [
  {
    name: "HTML",
    image: htmlImage,
  },
  {
    name: "CSS",
    image: cssImage,
  },
  {
    name: "JS",
    image: jsImage,
  },
  {
    name: "Tailwind",
    image: tailwindImage,
  },
  {
    name: "Vite",
    image: viteImage,
  },
  {
    name: "React",
    image: reactImage,
  },
  {
    name: "Shadcn/ ui",
    image: shadcnImage,
  },
];

const backEndSkills = [
  {
    name: "Node JS",
    image: nodeImage,
  },
  {
    name: "Express JS",
    image: expressImage,
  },
  {
    name: "MySQL",
    image: mysqlImage,
  },
  {
    name: "MongoDB",
    image: mongoImage,
  },
  {
    name: "Prisma ORM",
    image: prismaImage,
  },
  {
    name: "PHP",
    image: phpImage,
  },
  {
    name: "Laravel",
    image: laravelImage,
  },
];
export default function Skills() {
  return (
    <div className="flex flex-col w-full pb-10">
      <Helmet>
        <title>Skills | Arya Bima</title>
      </Helmet>
      <SkillsList name="Front End" skills={frontEndSkills} />
      <SkillsList name="Back End" skills={backEndSkills} />
    </div>
  );
}
