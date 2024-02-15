import React from "react";
import styles from "./Observation.module.css";
import e2_12_i from "../../Assets/obv/e2_12_initial.png";
import e2_12_f from "../../Assets/obv/e2_12_final.png";
import e2_15_i from "../../Assets/obv/e2_15_initial.png";
import e2_15_f from "../../Assets/obv/e2_15-final.png";
import e2_47_i from "../../Assets/obv/e2_47_initial.png";
import e2_47_f from "../../Assets/obv/e2_47_final.png";

function Observation() {
  return (
    <div className={styles.Div1}>
      <div className={styles.Div1_1}>
        <h2>MeanMaxJamLength</h2>
        <p>
          This section presents the results obtained after implementing the
          Multi Agent Reinforcement Learning system to train a Q-Network such
          that it dispatched correct joint actions i.e., desision to whether
          chnage the current TLS phase at a specific node or to leave it be for
          optimal traffic management. The target was to train the model to so as
          to dynamically and optimally manipulatinbg the TLS state to minimize
          the "Jam Lengths" at all the edges for an optimal and unhindered
          traffic flow.
        </p>
        <p>
          The initial simulation observation, i.e., static TLS phase implemented
          simulation of the designed SUMO configuration, yeilded long "Jam
          lengths" and large amount of "Waiting time" for each edge and node
          (Traffic junction) respectively. The corresponding graphical
          visualization is depicted in below 'Attribute plots'. This implies
          that static Traffic Light phase exchange is a fairly bad idea when it
          comes to vehicle flow management in the locations that face large
          traffic volumes. Simulation Configuration has been designed to
          generate two vehicles in a each time step i.e., period = 0.5 for an
          episode that lasts upto 1000 timesteps (This implies the generation of
          2000 vehicles within a timespan of 1000 sec if we are relating to real
          life scenario).
        </p>
        <h3>Observations with static/default TLS management</h3>
        <p>
          The plots below represent the MeanMaxJamLength detected/observed by
          'Lane Area Detectors' placed at various edges in the road network.
        </p>
        <div className={styles.obj_snaps}>
          <img src={e2_12_i} alt="" className={styles.snaps} />
          <img src={e2_15_i} alt="" className={styles.snaps} />
          <img src={e2_47_i} alt="" className={styles.snaps} />
        </div>
        <h3>Observations with dynamic TLS management</h3>
        <p>
          The figures below represent the observation made for the
          implementation of dynamic TLS phase management using MARL system. The
          figures depict noticeable changes the 'Jam lengths' as detected buy
          the 'Lane Area Detectors' in comaprison to the previous static TLS
          configuration.
        </p>
        <div className={styles.obj_snaps}>
          <img src={e2_12_f} alt="" className={styles.snaps} />
          <img src={e2_15_f} alt="" className={styles.snaps} />
          <img src={e2_47_f} alt="" className={styles.snaps} />
        </div>
      </div>
    </div>
  );
}
export default Observation;
