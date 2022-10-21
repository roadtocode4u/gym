import React from "react";
import "./Insturement.css";
import InsturementImg1 from "./img/barbells.png";
import InsturementImg2 from "./img/dumbells.png";

export default function Insturement() {
  return (
    <>
      <h1 className="text-center  p-2 insturement-title mt-2"> Let's Know About Gym Insturement⛹️‍♀️</h1>
      <div className="container">
        <div>
          <h2>Machine Name : Barbell</h2>

          <h2>Description</h2>
          <p className="paragraph-text mt-4">
          The Home Gym All-In-One machine also called a multi-gym is a multi-station workout machine that combines several exercises into one piece of equipment. It’s especially good for circuit training because you can quickly move from one exercise to another.
          </p>
          <div className="text-center mt-4">
           <img className="img-fluid  insturement-img" src={InsturementImg1} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-center h3-heading mt-5">
            <b>HOW TO DO BARBELL STEP UPS PROPERLY</b>
          </h3>
          <ol>
          <li className=" nutrian-menu mt-3">
            <p>Place a riser on the ground in front of you. Anything between 8-12 inches off the floor is ideal.</p>
          </li>
          <li className=" nutrian-menu mt-3">
            <p>Place a barbell on your upper back, behind your shoulders.</p>
          </li>
          <li className=" nutrian-menu mt-3">
            <p>Put one leg on the riser in front of you</p>
          </li>
          <li className=" nutrian-menu mt-3">
            <p>Drive through the front foot and extend the knee as you stand up fully.</p>
          </li>
          <li className=" nutrian-menu mt-3">
            <p>Replace the foot back on the ground</p>
          </li>
          <li className=" nutrian-menu mt-3">
            <p>Repeat for the desired number of repetitions.</p>
          </li>
          </ol>
        </div>
     <hr/>
        <div className="mt-5">
          <h2>Machine Name : Dumbbells</h2>

          <h2>Description</h2>
          <p className="paragraph-text mt-4">
          One of the most ancient pieces of training equipment, the classic dumbbell is a short bar with fixed amount of iron weights attached to its sides, that's what you will find in all gyms. There are modern adjustable design dumbbells that allow for plates to be exchanged for greater versatility. The humble dumbbell can be used to perform exercises that effectively work every muscle and it is an essential component of any gym.
          </p>
          <div className="text-center mt-4">
           <img className="img-fluid  insturement-img" src={InsturementImg2} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-center h3-heading mt-5">
            <b>HOW TO DO DUMBBELLS STEP UPS PROPERLY</b>
          </h3>
          <ol>
          <li className=" nutrian-menu mt-3">
            <p>With the dumbbells at your side, hinge at the waist and bend your knees to lift. Keep a neutral spine as you are lifting the dumbbells. <span className="span-color"> NEVER ROUND YOUR BACK WHILE LIFTING.</span></p>
          </li>
          <li className=" nutrian-menu mt-3">
            <p>Use a box height that is going to allow your hip and knee flexion to be as similar as possible to your stride while sprinting or bounding.</p>
          </li>
          <li className=" nutrian-menu mt-3">
            <p>Place one foot on the box, and drive the other leg’s knee up.</p>
          </li>
          <li className=" nutrian-menu mt-3">
            <p>The leg drive should be fast and explosive. (Quick note: keep the up leg’s foot pulled up toward the shin).</p>
          </li>
          <li className=" nutrian-menu mt-3">
            <p>The leg drive should be fast and explosive. (Quick note: keep the up leg’s foot pulled up toward the shin).</p>
          </li>
          <li className=" nutrian-menu mt-3">
            <p>Carefully lower the leg back down and prepare for the next repetition.</p>
          </li>
          </ol>
        </div>



      </div>
    </>
  );
}
