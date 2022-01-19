import styles from "./SortMenu.module.css";
import { skillSets } from "../../data/SkillSet";
import { motion } from "framer-motion";
import { ProjectData } from "../../data/ProjectData";

function changeBackground(e) {
  e.target.style.background = '#b9ff14';
  e.target.style.color = 'black';

}

function changeBack(e) {
  e.target.style.background = '#323030';
  e.target.style.color = 'white';
}

const menuVariant = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 0.5,
    },
  },
};

function SortMenu(props) {
  return (
    <motion.div
      className={styles.sortMenu}
      variants={menuVariant}
      initial="hidden"
      animate="visible"
      transition="transition"
    >
      {skillSets.map((skillSet) => {
        return (
          <button
            className={styles.sortBtn}
            style={{
              backgroundColor: skillSet === props.skillType && "#b9ff14",
            }}
            onMouseEnter={changeBackground}
            onMouseLeave={changeBack}
            onClick={() => {
              props.changeSkillType(skillSet);
            }}
          >
            {skillSet}
          </button>
        );
      })}
    </motion.div>
  );
}

export default SortMenu;
