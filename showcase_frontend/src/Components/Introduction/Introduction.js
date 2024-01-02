import React from "react";
import styles from "./Introduction.module.css";
import { Fragment } from "react";
import trafficImage from "../../Assets/traffic_jam.jpg";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

function Introduction() {
  return (
    <Fragment>
      <div className={styles.Div1}>
        <div className={styles.Div1_1}>
          <h1>Introduction</h1>
          <h3>Background</h3>
          <p>
            Conventional traffic management strategies have proved inefficient
            as vehicular traffic continues to grow. Growing urbanization and
            increasing vehicle numbers have resulted in significant traffic
            congestion, leading to longer travel times, increased fuel
            consumption, and environmental pollution. Traffic signal management
            is an essential method for the management of road intersections and
            regulating urban road traffic. The inefficiency of this system can
            cause serious problems such as long travel delays, congested queues,
            and energy wastage, and in some situations, it might be a reason for
            accidents. So, optimizing traffic flow management is crucial for the
            smooth functioning of urban areas, ensuring safe and timely
            transportation for both individuals and goods. Current traffic
            signal controllers are embedded with fixed programs ignoring
            real-time conditions of traffic. In practice, most traffic lights
            employ straightforward protocols such as switching between the
            traffic light modes (red and green) alternatively at predetermined
            intervals. Current traffic control systems often struggle to adapt
            to dynamic traffic conditions and fail to optimize the overall flow
            efficiently. To address this issue, emerging technologies like
            artificial intelligence (AI) and reinforcement learning offer
            promising solutions. By leveraging AI techniques, it becomes
            possible to develop intelligent systems that can learn and make
            decisions based on real-time traffic data.
          </p>
          <h3>Problem Statement</h3>
          <div className={styles.Div1_a}>
            <div className={styles.Div1_1_1}>
              <p>
                Urban areas face challenges of traffic congestion and
                inefficient traffic flow management, leading to increased travel
                times, fuel consumption, and environmental pollution.
                Traditional traffic control systems lack adaptability and fail
                to optimize traffic flow dynamically. Fixed signal timings and
                predetermined traffic plans limit their responsiveness to
                real-time traffic demands and variations. Therefore, there is a
                need for an intelligent system that can optimize traffic flow by
                dynamically adjusting signal timings and coordinating the
                actions of multiple agents. So, the project aims to address
                these limitations by developing a Multi-Agent AI System using
                reinforcement learning to improve traffic flow efficiency,
                reduce congestion, and enhance transportation sustainability.
              </p>
            </div>
            <div className={styles.Div1_1_2}>
              <figure>
                <img
                  src={trafficImage}
                  alt="Traffic jam"
                  className={styles.traffic_jam}
                />
              </figure>
            </div>
          </div>
          <h2>Literature Review</h2>
          <h3>Related Works</h3>
          <p>
            Bazzan, A.L.(2009) discussed the opportunities for using multiagent
            systems and MARL in traffic control, highlighting the potential of
            MARL techniques in reducing road user delay. They emphasized the
            suitability of the signal control problem as a testbed for MARL
            strategies.
          </p>
          <p>
            Hu and Wellman (1998) presented a theoretical framework for
            multiagent reinforcement learning and developed an algorithm to
            tackle the signal control problem. Their work demonstrated
            convergence to a Nash equilibrium under certain conditions.
          </p>
          <p>
            Wang et al. (2020) introduced a novel MARL approach called
            cooperative double Q-learning (Co-DQL) for large-scale traffic
            signal control. The Co-DQL algorithm addressed the overestimation
            problem associated with standard Q-learning techniques and fostered
            a more cooperative approach among agents.
          </p>
          <p>
            El-Tantawy et al. (2013) proposed MARLIN-ATSC, a multiagent
            reinforcement learning system for adaptive traffic signal control.
            MARLIN-ATSC uses two modes: an independent mode and an integrated
            mode. In the independent mode, each agent is controlled
            independently. In the integrated mode, agents communicate with each
            other to coordinate their actions. Their integrated approach
            improved traffic flow by reducing the average delay at each
            intersection.
          </p>
          <p>
            Mushtaq et al. (2021) explored the use of deep reinforcement
            learning and Q-Learning to learn to control traffic signals and
            reroute vehicles. Their approach demonstrated the potential of
            leveraging MARL techniques for efficient traffic management.
          </p>
          <h2>Related Theory</h2>
          <h3>Reinforcement Learning</h3>
          <p>
            Reinforcement learning is a branch of machine learning that focuses
            on training agents to make sequential decisions in an environment to
            maximize a cumulative reward. It involves an agent interacting with
            an environment and learning from the feedback it receives. The agent
            takes actions based on its current state, and the environment
            provides rewards or penalties based on the agent's actions. The goal
            is to find an optimal policy that maximizes the long-term reward.
            The goal of reinforcement learning is to find a policy that
            maximizes the agent's expected reward. This can be done by
            iteratively updating the value function until it converges to the
            optimal value function. The most common way to update the value
            function is using the Bellman equation. The Bellman equation is a
            recursive equation that relates the value of a state to the value of
            its successor states.The Bellman equation can be expressed as
            follows:
          </p>
          <p style={{ textAlign: "center" }}>
            <InlineMath math="V(s) = r + \gamma max_a V(s')"></InlineMath>
          </p>
          <p>
            where: V(s) is the value of state s. r is the reward received for
            taking action a in state s. <InlineMath math="\gamma"></InlineMath>{" "}
            is the discount factor, which determines how much weight is given to
            future rewards. s' is the next state after taking action a in state
            s. <InlineMath math="max_a V(s')"></InlineMath> is the maximum value
            of state s' and all possible actions a'. Reinforcement learning
            algorithms, such as Q-learning and deep reinforcement learning, have
            demonstrated their effectiveness in various domains, including
            traffic flow optimization.
          </p>
          <h3>Deep RL</h3>
          <p>
            Deep reinforcement learning combines reinforcement learning
            algorithms with deep neural networks to handle complex and
            high-dimensional state and action spaces. Deep learning
            architectures, such as deep neural networks or convolutional neural
            networks, are used to approximate the action-value function or
            policy function. The mathematical formulation of DRL is similar to
            the mathematical formulation of reinforcement learning, but with the
            addition of a neural network. The neural network is used to
            represent the value function or policy. The neural network is
            trained using the Bellman equation, or a variant of the Bellman
            equation. Deep reinforcement learning has shown remarkable success
            in various domains, including robotics, game playing, and autonomous
            driving.
          </p>
          <h3>MARL</h3>
          <p>
            Multi-Agent Reinforcement Learning (MARL) extends RL to scenarios
            with multiple interacting agents. In MARL, multiple agents learn
            simultaneously and affect each other's learning process. MARL can
            model various types of interactions, such as cooperation,
            competition, or a combination of both.
            
            Cooperation: All agents working towards a common goal
            
            Competition: Agents competing with one another to accomplish a goal
            
            Combination of the two: Think a 5v5 basketball game, where
            individuals on the same team are coordinating with one another, but
            the two teams are competing against one another.
            <br /><br />
            The mathematical formulation of MARL is similar to the mathematical
            formulation of reinforcement learning, but with the addition of
            multiple agents. The agents are represented by Q-functions, which
            are estimates of the expected reward for taking a particular action
            in a particular state. The Q-functions are updated over time as the
            agents learn from experience.
            <br /><br />
            The Q-learning algorithm can be extended to MARL by using a
            centralized or decentralized approach. In the centralized approach,
            all agents share their Q-functions with a central coordinator. The
            central coordinator then updates the Q-functions of all agents. In
            the decentralized approach, each agent maintains its own Q-function.
            The agents update their Q-functions independently, but they may
            communicate with each other to share information.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
export default Introduction;
