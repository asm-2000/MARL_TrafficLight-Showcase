import React from "react";
import styles from "./References.module.css";
import { Fragment } from "react";

const reference_list = [
  "[1] A.L. Bazzan. Opportunities for multiagent systems and multiagent reinforcement learn-ing in traffic control. Auton. Agents Multi-Agent System, 18:342–375, 2009.",
  "[2] J. Hu and M.P. Wellman. Multiagent reinforcement learning: Theoretical framework and an algorithm. In Proceedings of the Fifteenth International Conference on Machine Learning (ICML 1998), 1998.",
  "[3] L.; Qiao Z.; Chai X Wang, X.; Ke. Large-scale traffic signal control using a novel multi-agent reinforcement learning. IEEE Trans. Cybern, 51:174–187, 2020.",
  "[4] B.; Abdelgawad H El-Tantawy, S.; Abdulhai. Multiagent reinforcement learning for integrated network of adaptive traffic signal controllers (marlin-atsc): Methodology andlarge-scale application on downtown toronto. IEEE Trans. Intell. Transp. Syst, 14:1140–1150, 2013.",
  "[5] I.U.; Imtiaz M.U.; Khan A.; Shafiq O Mushtaq, A.; Haq. Traffic flow management of autonomous vehicles using deep reinforcement learning and smart rerouting. IEEE Access, 9:51005—-51019, 2021.",
];

function References() {
  return (
    <Fragment>
      <div className={styles.Div1}>
        <div className={styles.Div1_1}>
          {reference_list.map((reference) => (
            <><p>{reference}</p><br /></>
          ))}

        </div>
      </div>
    </Fragment>
  );
}
export default References;
