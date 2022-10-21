import React from "react";
import "./Insturement.css";
import InsturementImg1 from "./img/barbells.png";
import InsturementImg2 from "./img/dumbells.png";
import InsturementImg3 from "./img/Kettlebell.png";
import InsturementImg4 from "./img/EZbar.jpg";
import InsturementImg5 from "./img/PecDeck.jpg";

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
            <li className=" insturement-menu mt-3">
              <p>Place a riser on the ground in front of you. Anything between 8-12 inches off the floor is ideal.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Place a barbell on your upper back, behind your shoulders.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Put one leg on the riser in front of you</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Drive through the front foot and extend the knee as you stand up fully.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Replace the foot back on the ground</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Repeat for the desired number of repetitions.</p>
            </li>
          </ol>
        </div>
        <hr />
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
            <li className=" insturement-menu mt-3">
              <p>With the dumbbells at your side, hinge at the waist and bend your knees to lift. Keep a neutral spine as you are lifting the dumbbells. <span className="span-color"> NEVER ROUND YOUR BACK WHILE LIFTING.</span></p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Use a box height that is going to allow your hip and knee flexion to be as similar as possible to your stride while sprinting or bounding.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Place one foot on the box, and drive the other leg’s knee up.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>The leg drive should be fast and explosive. (Quick note: keep the up leg’s foot pulled up toward the shin).</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>The leg drive should be fast and explosive. (Quick note: keep the up leg’s foot pulled up toward the shin).</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Carefully lower the leg back down and prepare for the next repetition.</p>
            </li>
          </ol>
        </div>

        <hr />
        <div className="mt-5">
          <h2>Machine Name : Kettlebells</h2>
          <h2>Description</h2>
          <p className="paragraph-text mt-4">
            The kettlebell is one of the oldest forms of weight used for strength training. It's a Russian invention from some 300 years ago! It was largely popularized in the U.S. by Pavel Tsatsouline.
          </p>
          <p className="paragraph-text mt-4">
            It’s a large iron ball with a handle, but in spite of its simplicity, it is one of the most versatile pieces of equipment you can buy. Training with kettlebells requires learning very specific skills and a lot of practice. An experienced kettlebell lifter can train every muscle, build cardiovascular conditioning and develop incredible agility.
          </p>
          <div className="text-center mt-4">
            <img className="img-fluid  insturement-img" src={InsturementImg3} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-center h3-heading mt-5">
            <b>HOW TO DO KETTLEBELLS STEP UPS PROPERLY</b>
          </h3>
          <ol>
            <li className=" insturement-menu mt-3">
              <p>Hold kettlebells in the rack position.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Stand with feet shoulder-width apart.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Drop into a quarter squat and explode back to starting position while pressing the kettlebells overhead until your arms are fully extended. </p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Repeat.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>If you are lifting heavier loads, your heels may slightly come off the ground when you are exploding up, which is okay. It’s a natural extension of the movement, says Masiello. </p>
            </li>
          </ol>
        </div>
        <hr />
        <div className="mt-5">
          <h2>Machine Name : EZ curl bar</h2>
          <h2>Description</h2>
          <p className="paragraph-text mt-4">
            The E-Z bar is a standard barbell bar bent at around shoulder width grip. The E-Z bar is much better for biceps curls than the standard barbell because it puts your wrists in a more natural grip position. I have injured my wrists about two decades ago from doing biceps curls with barbells. Never again. Always E-Z bar for me.
          </p>
          <div className="text-center mt-4">
            <img className="img-fluid  insturement-img" src={InsturementImg4} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-center h3-heading mt-5">
            <b>HOW TO DO KETTLEBELLS STEP UPS PROPERLY</b>
          </h3>
          <ol>
            <li className=" insturement-menu mt-3">
              <p>Load a suitable amount of weight onto an EZ bar. Alternatively, use a fixed bar for more convenience.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Grab the bar with a shoulder-width grip so that your elbows are pinned to your sides.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p> With the bar resting against your thighs, curl the weight toward your shoulders while keeping your elbows still.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Keep curling until the undersides of your forearms make forceful contact with your biceps.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>  Hold the contraction for a moment and then lower the weight under control until your elbows reach full extension.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Perform 3-5 sets of 6-15 reps in total.</p>
            </li>
          </ol>
        </div>
        <hr />
        <div className="mt-5">
          <h2>Machine Name : Pec Deck Machine</h2>
          <h2>Description</h2>
          <p className="paragraph-text mt-4">
            One of the most used machines in any gym, the pec deck machine allows you to isolate your pectoral muscles without having to lug heavy dumbbells into position first. It's a fantastic machine for isolating the pecs, but less for building mass. It's also a favorite of beginners since it's hard to use it the wrong way.
          </p>
          <div className="text-center mt-4">
            <img className="img-fluid  insturement-img" src={InsturementImg5} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-center h3-heading mt-5">
            <b>HOW TO DO PEC DECK MACHINE STEP UPS PROPERLY</b>
          </h3>
          <ol>
            <li className=" insturement-menu mt-3">
              <p>Select the weight for the machine.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Sit on the platform.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Grab one handle of the machine with each hand.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p>Gripping the pec deck handles, pull your arms toward your body while contracting your pectoral muscles.</p>
            </li>
            <li className=" insturement-menu mt-3">
              <p> Repeat the desired number of reps. </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
