import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { client } from "../client";

const Home = ({ teams }) => {
  console.log(teams);
  return (
    <div className={styles.container}>
      <h1>Formula 1 Teams</h1>
      <ul>
        {teams.map((team, index) => {
          return (
            <li key={index}>
              {team.fields.title}
              <ul>
                {team.fields.drivers.map((driver, index) => {
                  return <li key={index}>{driver.fields.name}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "teams",
  });

  return {
    props: {
      teams: res.items,
    },
  };
}
