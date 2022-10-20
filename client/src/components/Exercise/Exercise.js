import React from "react";
import "./Exercise.css";
import ExciseImg1 from "./img/MusclesExerciseimg.png";
import ExciseImg2 from "./img/pushups.png";
import ExciseImg3 from "./img/kettlebell.png";
import ExciseImg4 from "./img/Burpees.png";
import ExciseImg5 from "./img/pushups-exercise.png";


export default function Exercise() {
  return (
    <>

    {/* Exercise Menu */}
      <h1 className="text-center  p-2 exercise-title mt-2">Exercise...💪🤸‍♀️</h1>

      <div className="container">
        <div>
          <h2>Best Exercises to Help Build Muscle...</h2>
          <div className="text-center mt-4">
          <img
            src={ExciseImg1}
            className="img-fluid pushups-img"
            alt="Responsive image"
          />
          </div>
          <p className="paragraph-text mt-4">
            If you’re dreaming of lean and muscular physic, then make sure your
            workout includes exercises to build muscle. Despite what many women
            think, building muscle doesn’t automatically make you look big and
            bulky. Strength training is key to looking strong and toned. It can
            also help you burn fat and lose weight in the long run.
          </p>
        </div>

        <div>
          <h1 className="text-center h1-heading mt-5">
            <b>Different types of exercise to build the muscles</b>
          </h1>
          <li className="push-ups mt-3">
            <b>Push-Ups</b>
          </li>
          <div className="text-center mt-4">
          <img className="img-fluid pushups-img" src={ExciseImg2} alt="" />
          </div>
          <p className="paragraph-text mt-4">
            If you’re looking for exercises to build muscle that doesn’t require
            any equipment, then push-ups are the way to go. While they mainly
            work your upper body (triceps, pectoral muscles, and shoulders),
            push-ups can also strengthen your core and lower back. Start with 5
            or 10 each morning. Then, slowly add more every couple of days to
            build up your strength and endurance.
          </p>
          <p className="paragraph-text">
            If a full push-up is too difficult, you can also modify the pose to
            make things easier. Rest your hands on a higher surface or do a
            push-up on your knees instead
          </p>

          <li className="push-ups mt-3">
            <b>Kettlebell Squats</b>
          </li>
          <div className="text-center mt-4">
          <img className="img-fluid pushups-img" src={ExciseImg3} alt="" />
          </div>
          
          <p className="paragraph-text mt-4">
            Normal squats are great for building muscle in your lower body. But
            add a kettlebell to the mix, and you’ll see even more progress! Just
            that little bit of weight will help you work your upper body and
            core. For a more intense workout, try a kettlebell swing instead..
          </p>
          <p className="paragraph-text">
            Kettlebells come in various sizes and weights. Kettlebell Kings has
            weights starting at 10lbs going all the way up to 100lbs
          </p>

          <li className="push-ups mt-3">
            <b>Burpees</b>
          </li>
          <div className="text-center mt-4">
          <img className="img-fluid pushups-img" src={ExciseImg4} alt="" />
          </div>

          <p className="paragraph-text mt-4">
            Burpees are a must if you want to know how to build muscle fast.
            This full-body exercise consists of planks, squats, and jumps, all
            of which work each of your muscle groups! If you do them long
            enough, you’ll also get a cardio workout too.
          </p>
          <p className="paragraph-text">
            High-intensity interval training (HIIT) is a workout that usually
            includes burpees (along with many other exercises). You alternate
            certain exercises with periods of rest, which burns more calories
            than working out at a steady pace.
          </p>

          <div>
            <h2>Best Exercises to Help Weight Increase...</h2>
            {/* <img src={ExciseImg5}
            className="img-fluid" alt="Responsive Image"
            width="800" /> */}
            {/* <img src={ExciseImg5} className="" alt="Responsive image"/> */}
            <p className="paragraph-text mt-4">
              You may want to gain weight to build muscle or if you’re
              underweight, which means you weigh less than is healthy for your
              height. Not sure if you’re underweight? Use this body mass index
              (BMI) calculatorTrusted Source to find out.
            </p>

            <p className="paragraph-text mt-4">
              Regular exercise is one of the most important steps to bulk up.
              But as with losing weight, gaining weight should be a part of a
              holistic plan. Here, we’ll cover some exercise tips for gaining
              weight with minimal equipment that you can start doing right now.
              Then, we’ll talk about how to build healthy body mass.
            </p>
          </div>

          <div>
            <h1 className="text-center h1-heading mt-5">
              <b>Exercises to gain weight for females and males</b>
            </h1>
            <li className="push-ups mt-3">
              <b>Pushups</b>
            </li>
            <div className="text-center">
            <img src={ExciseImg5}
            className="img-fluid pushups-img" alt="Responsive Image" />
            </div>
            {/* <img className="img-fluid w-100"  src={ExciseImg2} alt=''/> */}
            <p className="paragraph-text">
              Pushups are simple and help build muscle in your arms and
              shoulders. To do a pushup:
            </p>
            <ol>
              <li className="paragraph-text">Lie face down on the ground.</li>
              <li className="paragraph-text">
                Put your hands on the ground, palms flat, with your arms out at
                your sides and your hands shoulder-width apart.
              </li>
              <li className="paragraph-text">
                Slowly push your body up until your arms are fully extended.
                Keep your back and legs straight so that your body makes a
                straight line.
              </li>
              <li className="paragraph-text">
                Slowly lower yourself back down until your nose nearly touches
                the floor.
              </li>
              <li className="paragraph-text">
                Repeat as many times as you feel comfortable.
              </li>
            </ol>

            <li className="push-ups mt-3">
              <b>Pullups</b>
            </li>
            <div className="text-center">
            <img src={ExciseImg5}
            className="img-fluid pushups-img" alt="Responsive Image"
            width="800" />
            </div>
            <p className="paragraph-text">
              You’ll need some kind of pullup bar or sturdy cylindrical object
              to do pullups. Otherwise, this exercise is a simple way to build
              arm and shoulder muscles.
            </p>
            <ol>
              <li className="paragraph-text">
                Grip the pullup bar with both hands. Your palms should face away
                from you. Keep your arms shoulder-width apart
              </li>
              <li className="paragraph-text">
                Pull yourself up enough to hang off the bar so that your feet
                aren’t touching the ground and your arms are straight.
              </li>

              <li className="paragraph-text">
                Continue to pull yourself up until your chin is above the bar.
              </li>
              <li className="paragraph-text">
                Slowly lower yourself down so that your arms are straight again.
              </li>
              <li className="paragraph-text">
                Repeat as many times as you want.
              </li>
            </ol>

            <li className="push-ups mt-3">
              <b>Squats</b>
            </li>
            <div className="text-center">
            <img src={ExciseImg5}
            className="img-fluid pushups-img" alt="Responsive Image"
            width="800" />
            </div>

            <p className="paragraph-text">
              This exercise helps build muscle in your butt and legs, especially
              your quadriceps femoris (quads) muscles.
            </p>
            <ol>
              <li className="paragraph-text">
                Stand up straight so that your feet are hips-width distance
                apart.
              </li>
              <li className="paragraph-text">
                Put your hands on your hips and flex your abdominal muscles.
              </li>
              <li className="paragraph-text">
                Begin lowering yourself down using only your legs, as if you’re
                about to sit down, and get into a seated position until your
                thighs are parallel to the ground. Keep your upper body as still
                as possible
              </li>
              <li className="paragraph-text">
                Raise yourself back up to your original position.
              </li>
              <li className="paragraph-text">
                Repeat as many times as you want.
              </li>
            </ol>

            <li className="push-ups mt-3">
              <b>Overhead press</b>
            </li>
            <div className="text-center">
            <img src={ExciseImg5}
            className="img-fluid pushups-img" alt="Responsive Image"
            width="800" />
            </div>
            
            <p className="paragraph-text">
              You’ll need a weighted bar to perform this exercise. Overhead
              presses will help bulk up the muscles in your arms, shoulders,
              back, abs, and legs.
            </p>
            <ol>
              <li className="paragraph-text">
                Grip the bar with your hands about shoulder-width apart.
              </li>
              <li className="paragraph-text">
                Lift the bar up to just above the front of your chest, even with
                your shoulders.
              </li>
              <li className="paragraph-text">
                Slowly lift the bar above you until your arms are straight. Keep
                your elbows locked and raise your shoulders like you’re
                shrugging.
              </li>
              <li className="paragraph-text">
                Slowly lower the bar back to shoulder height.
              </li>
              <li className="paragraph-text">
                Repeat steps 3 and 4 as many times as comfortable.
              </li>
            </ol>
          </div>
        </div>
      </div>
</>
);
}










