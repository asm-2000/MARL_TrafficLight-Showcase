import React from "react";
import styles from "./Homepage.module.css";
import { Fragment } from "react";

function Homepage() {
    
  return (
    <Fragment>
      <div className={styles.Div1}>
        <div className={styles.Div1_1}>
          <figure>
            <img
              src={require("../../Assets/project_name.png")}
              alt="MARL"
              className={styles.project_name}
            />
          </figure>
        </div>
        <div className={styles.Div1_2}>
          <div className={styles.Div1_2_1}>
            <h1>About</h1>

            <p>
              Multi-Agent Artificial Inteligence System For Traffic Flow is a
              Reinforcement Learning based project that intends to simulate the
              benefits of dynamically adapting traffic lights over the
              traditional light systems having constant time period for each of
              the phases.
            </p>

            <p>
              This project collaborates the urban traffic scenario that can be
              simulated in SUMO (Simulation of Urban MObility) with the concepts
              of Q-learning (Reinforcement Learning) and demonstrates the
              overall improvement in the 'Jam Length', 'Waiting Time' and other
              relevant factors relating to the urban traffic flow.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Homepage;
