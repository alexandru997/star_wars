import React from "react";
import styles from "./PeopleList.module.css";
import PropTypes from "prop-types";

function PeopleList({ people }) {
  return (
    <div>
      <ul className={styles.list__containter}>
        {people.map(({ id, name, img }) => (
          <li className={styles.list__item} key={id}>
            <a href="#">
              <img className={styles.person__photo} src={img} alt={name} />
              <p>{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

PeopleList.prototype = {
  people: PropTypes.array,
};

export default PeopleList;
