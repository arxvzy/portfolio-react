import SkillCard from "./SkillCard";
export default function SkillsList({ name, skills }) {
  return (
    <div className="w-1/2 mx-auto mt-10 flex flex-col">
      <h1 className="font-bold text-3xl mx-auto">{name}</h1>
      <div className="w-full flex  justify-center flex-wrap gap-x-7 text-xl mx-auto font-semibold">
        {skills.map((item) => (
          <SkillCard name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
}
