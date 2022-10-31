import React from "react";
import styles from "../../styles/NoobDetails.module.css";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const paths = data.map((friend) => {
    return {
      params: { id: friend.id.toString() },
    };
  });

  // In order to create the routes prematurely through this function
  // we have to return a object with a paths property inside of it
  // which is going to be an array  of objects consisting of a param
  // property in which we specify the name of the route we want to create
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return {
    props: {
      noob: data,
    },
  };
};

export default function NoobDetails({ noob }) {
  return (
    <div className={styles.container}>
      <h2>{noob.name}</h2>
      <p>{noob.email}</p>
      <p>{noob.website}</p>
    </div>
  );
}
