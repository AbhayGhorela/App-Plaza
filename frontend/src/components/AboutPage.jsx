// AboutPage.jsx
import React from "react";
import About from "../assets/about.png";
import Logo from "../assets/logo.png";

function AboutPage() {
  return (
    <div className="main-div flex flex-col w-full h-full bg-gradient-to-r from-teal-200 to-teal-500 text-zinc-700 ">
      <div className="container flex">
        <div className="image w-full">
          <img
            src={About}
            alt="About img"
            className="w-96 h-96 mx-auto drop-shadow-xl hover:drop-shadow-2xl"
          />
          <h2 className="font-bold text-xl mt-6 pl-5 ">
            Meet the Creator - Abhay Kumar Ghorela
          </h2>
          <p className="font-lg text-xl p-5">
            Hello, I'm Abhay Kumar Ghorela, with partner Krishan Kumawat the driving force behind App Plaza.
            With a passion for technology and a vision to simplify the process
            of discovering and acquiring apps, I founded this platform. My aim
            is to provide a seamless experience for users seeking reliable and
            innovative applications.
          </p>

          <img
            src={Logo}
            alt="Logo"
            className="w-80 h-80 mx-auto drop-shadow-xl hover:drop-shadow-2xl"
          />
        </div>

        <div className="about-us w-full">
          <h1 className="font-bold text-4xl text-center mt-5">
            About App Plaza
          </h1>
          <p className="font-lg text-xl p-5">
            Welcome to App Plaza! Your go-to destination for discovering and
            downloading a wide array of applications curated just for you. I'm
            Abhay Kumar Ghorela, the creator of this platform, and I'm thrilled
            to share the story behind App Plaza.
          </p>

          <h2 className="font-bold text-xl mt-3 pl-5">Our Vision</h2>
          <p className="font-lg text-xl p-5">
            At App Plaza, we believe in the power of technology to enhance our
            lives. Our vision is to create a one-stop destination where users
            can explore, discover, and download a diverse range of applications
            tailored to their needs. We understand the importance of having
            access to quality apps that make your digital experience more
            enjoyable, efficient, and enriching.
          </p>

          <h3 className="font-bold text-xl mt-48 pl-5">
            What Sets App Plaza Apart
          </h3>
          <ul className="font-lg text-xl p-5">
            <li>
              <span className="font-bold text">Curated Selection:</span> We
              meticulously curate our app collection to ensure you have access
              to the best and most relevant applications across various
              categories.
            </li>
            <li>
              <span className="font-bold text">User-Friendly Interface:</span>{" "}
              Navigating through App Plaza is a breeze. Our user-friendly
              interface is designed to make your app discovery process enjoyable
              and straightforward.
            </li>
            <li>
              <span className="font-bold text">Constant Updates</span>: We stay
              on top of the latest trends and updates in the app world. Expect
              regular additions to our collection, keeping you in the loop with
              the newest and most exciting applications.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center font-xl">
        <h1 className="font-bold text-4xl my-5">Join Us on the App Journey</h1>
        <p className="font-lg text-xl p-5">
          I invite you to embark on this app journey with us. Whether you're a
          tech enthusiast, a casual user, or someone looking for specific tools,
          App Plaza is here to cater to your app needs. Thank you for being a
          part of our community, and we look forward to enhancing your digital
          experience.
          <p className="font-bold pt-5">Abhay Kumar Ghorela</p>
          <p className="font-lg">Founder, App Plaza</p>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
