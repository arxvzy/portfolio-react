import { Card, CardContent } from "../components/ui/card";
export default function SkillCard({ image, name }) {
  return (
    <Card className="mt-6 bg-primary rounded-2xl flex w-1/5 border border-slate-400 group hover:bg-accent hover:transition ease-in-out duration-500 hover:scale-105">
      <CardContent className="mx-auto w-full">
        <div className="w-full h-2/3 flex">
          <img
            src={image}
            alt="HTML"
            className="w-full my-auto grayscale group-hover:grayscale-0 group-hover:transition ease-in-out duration-500"
          />
        </div>
        <p className="text-center mt-2">{name}</p>
      </CardContent>
    </Card>
  );
}
