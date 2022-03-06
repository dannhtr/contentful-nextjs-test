import styles from "../styles/Home.module.css";

import { createContenfultClient } from "../client";

const Home = ({ teams }) => {
  return (
    <div className={styles.container}>
      <h1>Formula 1 Teams</h1>
      <ul>
        {teams.map((team, index) => {
          return (
            <li key={index}>
              {team.fields.title}
              <ul>
                {team.fields.drivers?.map((driver, index) => {
                  return (
                    <div key={index}>
                      <li>{driver.fields.name}</li>
                      <ul>
                        {driver.fields.winnerIn?.map((circuits, index) => {
                          return (
                            <li key={index}>
                              <small>{circuits.fields.name}</small>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
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

export async function getStaticProps({ preview }) {
  const client = createContenfultClient({ preview });
  const res = await client.getEntries({
    content_type: "teams",
    include: 2,
  });

  return {
    props: {
      teams: res.items,
    },
  };
}
