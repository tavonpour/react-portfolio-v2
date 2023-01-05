import React from "react";
import ProfilePicture from "../assets/profile_picture_cropped.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
            <p className="py-4">// Just a little insight into who I am.</p>
          </div>
          <div></div>
        </div>
        <div
          className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"
          style={{ "place-items": "center" }}
        >
          <img
            src={ProfilePicture}
            alt="Profile picture of me"
            className="rounded-full md:flex w-[80%]"
          />

          <div className="space-y-[20px]">
            <p>
              I am passionate about building awesome software that makes life
              easier / better! I'm a hard worker, quick learner, enthusiastic
              nerd, that's perpetually learning in order to improve my skills.
            </p>
            <p>
              If I not in front of my computer trying to learn something new,
              you'll find me spending time with my wife, puppy, and newborn
              daughter or trying to catch up on some much needed sleep!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
