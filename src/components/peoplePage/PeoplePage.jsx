import React, { useEffect, useState } from "react";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";

import { getApiResurce } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import PeopleList from "./poepleList/PeopleList";

// import styles from "./PeoplePage.module.css";
function PeoplePage({ setErrorApi }) {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResurce(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);
        return { id, name, img };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return (
    <div>
      <h1>Navigation</h1>

      {people && <PeopleList people={people} />}
    </div>
  );
}

export default withErrorApi(PeoplePage);
