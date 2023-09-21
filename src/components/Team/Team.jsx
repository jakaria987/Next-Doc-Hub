"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {
  FaFacebook,
  FaGithubAlt,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="max-w-7xl mx-auto py-12  my-2"
      // style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/02/00/09/97/240_F_200099796_yIXeWL1QMwXObh2yVnYZXXP9MXnieYbS.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-center text-slate-600 mt-12 mb-8">
        Meet Our Amazing Team
      </h1>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="card card-compact w-full  bg-base-300 shadow-xl"
        >
          <figure>
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img src="https://i.ibb.co/FYRTV0J/370597374-263938599909878-546731542782313725-n.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold text-slate-600">
              Al Mamun Shishir
            </h2>
            <h1 className=" text-center text-xl font-bold text-slate-600">
              Full-stack developer
            </h1>
            <p className="text-center font-bold">Team leader</p>
            <div className=" text-center w-16 mx-auto my-2">
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <FaFacebook className="text-blue-800 w-6 h-6"></FaFacebook>
                </div>
                <div>
                  <FaLinkedin className="text-blue-800 w-6 h-6"></FaLinkedin>
                </div>
                <div>
                  <FaGithubAlt className=" w-7 h-7"></FaGithubAlt>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img src="https://i.ibb.co/zNpZZzN/Me.png" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold text-slate-600">
              Md Jakaria Hossain
            </h2>
            <h1 className=" text-center text-xl font-bold text-slate-600">
              Back-End developer
            </h1>
            <p className="text-center font-bold">Team manager</p>
            <div className=" text-center w-16 mx-auto my-2">
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <FaFacebook className="text-blue-800 w-6 h-6"></FaFacebook>
                </div>
                <div>
                  <FaLinkedin className="text-blue-800 w-6 h-6"></FaLinkedin>
                </div>
                <div>
                  <FaGithubAlt className=" w-7 h-7"></FaGithubAlt>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img src="https://i.ibb.co/rmh31P7/Capture.png" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold text-slate-600">
              Md Tanim Ahmed
            </h2>
            <h1 className=" text-center text-xl font-bold text-slate-600">
              Full-stack developer
            </h1>
            <p className="text-center font-bold">Co-Manager</p>
            <div className=" text-center w-16 mx-auto my-2">
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <FaFacebook className="text-blue-800 w-6 h-6"></FaFacebook>
                </div>
                <div>
                  <FaLinkedin className="text-blue-800 w-6 h-6"></FaLinkedin>
                </div>
                <div>
                  <FaGithubAlt className=" w-7 h-7"></FaGithubAlt>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img src="https://i.ibb.co/wc3wH7t/Akhi.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold text-slate-600">
              Sumiya Akter Akhi
            </h2>
            <h1 className=" text-center text-xl font-bold text-slate-600">
              Front-End developer
            </h1>
            <p className="text-center font-bold">Co-leader</p>
            <div className=" text-center w-16 mx-auto my-2">
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <FaFacebook className="text-blue-800 w-6 h-6"></FaFacebook>
                </div>
                <div>
                  <FaLinkedin className="text-blue-800 w-6 h-6"></FaLinkedin>
                </div>
                <div>
                  <FaGithubAlt className=" w-7 h-7"></FaGithubAlt>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img src="https://i.ibb.co/r2DKk2p/portfiolio.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold text-slate-600">
              Roksana Monowar Barna
            </h2>
            <h1 className=" text-center text-xl font-bold text-slate-600">
              React developer
            </h1>
            <p className="text-center font-bold">Team assistant</p>
            <div className=" text-center w-16 mx-auto my-2">
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <FaFacebook className="text-blue-800 w-6 h-6"></FaFacebook>
                </div>
                <div>
                  <FaLinkedin className="text-blue-800 w-6 h-6"></FaLinkedin>
                </div>
                <div>
                  <FaGithubAlt className=" w-7 h-7"></FaGithubAlt>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img src="https://i.ibb.co/0chxsGZ/373074699-608951251449201-4590707402108567647-n.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold text-slate-600">
              Samanta Akter Riya
            </h2>
            <h1 className=" text-center text-xl font-bold text-slate-600">
              Full-stack developer
            </h1>
            <p className="text-center font-bold">Team assistant</p>
            <div className=" text-center w-16 mx-auto my-2">
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <FaFacebook className="text-blue-800 w-6 h-6"></FaFacebook>
                </div>
                <div>
                  <FaLinkedin className="text-blue-800 w-6 h-6"></FaLinkedin>
                </div>
                <div>
                  <FaGithubAlt className=" w-7 h-7"></FaGithubAlt>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="hero  max-w-5xl md:h-[450px] h-screen mx-auto "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTM0NDgwNzh8MA&ixlib=rb-4.0.3)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white ">
            <h1 className="mb-5 text-5xl font-bold font-serif">
              Creative & progressive Team
            </h1>
            <p className="mb-5 font-medium">
              A Web developer is proficient in both front-end and back-end
              development. They have the skills to work on all aspects of web
              development, from designing user interfaces to building
              server-side logic. Full-stack developers are capable of creating
              entire web applications on their own or contributing to different
              parts of a project.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
