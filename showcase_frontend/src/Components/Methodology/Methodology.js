import React from "react";
import { Fragment } from "react";
import styles from "./Methodology.module.css";
import algo1 from "../../Assets/algo1.png";
import algo2 from "../../Assets/algo2.png";
import systemdesign from "../../Assets/systemdesign.png";
import network from "../../Assets/network.png";
import node from "../../Assets/node.png";
import table from "../../Assets/table.png";

function Methodology() {
  return (
    <Fragment>
      <div className={styles.Div1}>
        <div className={styles.Div1_1}>
          <h1>Methodology</h1>
          <h3>Feasibility</h3>
          <p>
            {" "}
            Since, implementing the ideas of this project in real-life road
            junctions, requires extensive hardware design and modification of
            existing traffic light controllers as well as permission from
            authorities, it is unfortunately not possible to implement directly
            into the existing sys tem without co-operation from multiple
            organization and the guarantee of applicability of the project.
            Particularly in Nepal, where the technology hasn’t advanced enough
            to be able to support this project in the road junctions even in
            major cities like Kathmandu. Thus, this project sets out to prove
            its usefulness by first applying it in a real-time traffic
            simulating software i.e, SUMO.
          </p>
          <h3>Procedure</h3>
          <p>
            {" "}
            Our proposal suggests the utilization of Multi-Agent Reinforcement
            Learning (MARL) to manage traffic signals and optimize the flow of
            traffic. We view real-time traffic as a complex stochastic process.
            By dynamically adjusting the duration of green and red phases at
            inter sections, we aim to improve traffic flow in real-time. MARL
            employs the concept of Markov decision processes (MDPs) as a highly
            suitable framework for achieving this objective. The size of the
            state space, the range of possible actions, and the number of
            junctions within a road network are directly proportional. As the
            number of junctions increases, the state space and action
            possibilities grow exponentially. Systems that implement MARL prove
            highly effective due to the allocation of specific agents to control
            subsets of the state space, which helps reduce the overall state
            size and action space. However, managing large networks presents a
            significant challenge in MARL, where each agent behaves
            independently and possesses limited information about the entire
            network configuration. To tackle this issue, decentralized policies
            considering the network structure need to be employed. Following are
            the steps to be followed:
            <ul>
              <li>
                In the first step, we will be using the SUMO traffic simulator
                for the generation of traffic, Road Network Design,
                Infrastructure Design, Route Assignment, traffic signals, and
                other related tasks.
              </li>
              <br />
              <li>
                {" "}
                In the second step, we will be implementing Independent
                Advantage Actor-Critic (IA2C) algorithm and training the Neural
                Network Model. The traffic signal switching is determined by
                observing the flow of nearby vehicles.
              </li>
              <br />
              <li>
                Inthethird step, we will be implementing Multi-Agent Advantage
                Actor-Critic (MA2C) algorithm and training the Neural Network
                Model. Here the traffic signal switching is also determined by
                observing the flow of nearby vehicles but the difference is that
                it also interacts with neighboring agents.
              </li>
              <br />
              <li>
                {" "}
                In the fourth step, we apply the rerouting technique on both
                algorithms and improve the flow of traffic more effectively
              </li>
              <br />
              The detailed algorithms are as folows:
            </ul>
          </p>
          <div className={styles.algos}>
            <img src={algo1} alt="algo1" className={styles.algoimg} />
            <img src={algo2} alt="algo2" className={styles.algoimg} />
          </div>
          <h3>Experimental Setup</h3>
          <p>
            {" "}
            Simulation plays a crucial role in effectively and safely solving
            real-world problems. It is a vital analytical technique that is
            straightforward to test, communicate, and comprehend. Simulation
            offers valuable solutions in various industries and fields by
            providing a clear un derstanding of intricate systems. In the
            context of traffic control systems, traffic simulations are
            essential for comprehending traffic dynamics and control operations.
            This, in turn, leads to the development of improved ideas, novel
            algorithms, and efficient systems In this study, we will use SUMO
            (”Simulation of Urban MObility”), an open-source microscopic traffic
            sim ulator. SUMO enables the importation and creation of road
            networks, generation of routes, creation of diverse vehicles,
            assignment of varying traffic densities to roads, and integration of
            other infrastructural systems onto the road network to achieve a
            complex and modern road setup. External applications provide a
            socket-based interface, allowing the implemen tation and testing of
            different algorithms in various scenarios. The simulation parameters
            are presented in Table 1.
          </p>
          <div className={styles.algos}>
            <img src={table} alt="parameters" className={styles.algoimg} />
            <img src={network} alt="road Network" className={styles.algoimg} />
          </div>
          <h3>Junction Setup</h3>
          <div className={styles.algos}>
            <p style={{ paddingInlineEnd: "20px", width: "55%" }}>
              {" "}
              In SUMO, fixed traffic lights are generated with 90 s cycle time
              by default pre-time. The cycle time could be changed according to
              the requirement. Between the main phases, green time is
              distributed equally and is followed by the yellow phase. The
              yellow phase is dependent on the max speed of roads and could be
              changed according to requirements. The duration of the phases of
              signal time is dependent on the multiple characteristics of
              traffic such as the number of vehicles, available space on road,
              number of vehicles in the queue, etc. Reinforcement learning is
              used to make these traffic signals intelligent to work according
              to the current situation at the intersection. Using MARL, these
              traffic signals can also communicate with neighboring signals and
              get the traffic condition on those signals to make traffic
              decisions accordingly
            </p>
            <img src={node} alt="node" className={styles.algoimg} />
          </div>
          <h3>System Design</h3>
          <img src={systemdesign} alt="sysdesign" />
          <p>
            {" "}
            In SUMO, fixed traffic lights are generated with 90 s cycle time by
            default pre-time. The cycle time could be changed according to the
            requirement. Between the main phases, green time is distributed
            equally and is followed by the yellow phase. The yellow phase is
            dependent on the max speed of roads and could be changed according
            to requirements. The duration of the phases of signal time is
            dependent on the multiple characteristics of traffic such as the
            number of vehicles, available space on road, number of vehicles in
            the queue, etc. Reinforcement learning is used to make these traffic
            signals intelligent to work according to the current situation at
            the intersection. Using MARL, these traffic signals can also
            communicate with neighboring signals and get the traffic condition
            on those signals to make traffic decisions accordingly.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
export default Methodology;
