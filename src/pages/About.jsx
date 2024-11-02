import { Helmet } from "react-helmet";
import faceImage from "../assets/face.jpg";
import { BriefcaseBusiness, GraduationCap, Medal } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>About | Arya Bima</title>
      </Helmet>

      {/* 
        About Section Here
      */}
      <div className="flex w-3/5 mx-auto mt-10 justify-start text-base font-normal">
        <div className="w-1/2 ">
          <h1 className="font-bold text-3xl">About Me</h1>
          <p className="mt-2 text-justify">
            Hello, world! My name is Arya Bima. I'm a Fullstact Web Developer
            and Informatics Student. Currently live in Purwokerto City, Central
            Java. I was born in Pekalongan on July 23, 2004. I passionate in
            developing Fullstack Web App and like to learn new things.
          </p>
        </div>
        <div className="w-1/4 m-auto">
          <img
            src={faceImage}
            alt="Image of me"
            className="w-full mx-auto rounded-full aspect-square object-cover object-top border-2 border-slate-700"
          />
        </div>
      </div>

      {/* 
        Education Section Here 
      */}
      <div className="w-3/5 mt-6 mx-auto ">
        <h1 className="font-bold text-3xl">Education</h1>
        <div className="mt-2 flex gap-2">
          <GraduationCap className="w-6 h-6" />
          <div className="text-base font-normal">
            <h2 className="font-semibold ">Telkom University Purwokerto</h2>
            <p>2023 - Present</p>
            <p>Informatics</p>
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <GraduationCap className="w-6 h-6" />
          <div className="text-base font-normal">
            <h2 className="font-semibold ">SMK Negeri 1 Kedungwuni</h2>
            <p>2020 - 2023</p>
            <p>Computer & Network Engineering</p>
          </div>
        </div>
      </div>

      {/* 
        Experience Section Here
      */}
      <div className="w-3/5 mt-6 mx-auto">
        <h2 className="font-bold text-3xl">Experience</h2>
        <div className="mt-2 flex gap-2">
          <BriefcaseBusiness className="w-6 h-6" />
          <div className="text-base font-normal">
            <h2 className="font-semibold ">CEO Point Networking</h2>
            <p className="italic">Internship</p>
            <p>Jun 2022 - Sep 2022</p>
            <ul className="list-disc list-inside">
              <li>Configure Network Devices</li>
              <li>Setup Wi-Fi on client</li>
              <li>Responsible for Network problems on client</li>
              <li>Responsible for problems with Fiber Optic</li>
              <li>Expanding the network area using Fiber Optic</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 
        Achievements Section Here
      */}
      <div className="w-3/5 mt-6 mx-auto pb-10">
        <h2 className="font-bold text-3xl">Achievements</h2>
        <div className="mt-2 flex gap-2">
          <Medal className="w-6 h-6" />
          <div className="text-base font-normal">
            <h2 className="font-semibold ">
              2<sup>nd</sup> place in the Student Competency Competition for IT
              Network System Administration at the Central Java Province level
            </h2>
            <p>2023</p>
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <Medal className="w-6 h-6" />
          <div className="text-base font-normal">
            <h2 className="font-semibold ">
              1<sup>st</sup> place in the Student Competency Competition for IT
              Network System Administration at the Pekalongan Regency level
            </h2>
            <p>2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
