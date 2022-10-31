import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Friends.module.css";

// This function is going to run when the component loads up in the server
// Whatever the output of this function is , is going to be passed in
// as a prop inside of the component that is going to be rendered
// by this route.

// The props property inside of the object we return is what thats going
// to be sent in as a prop.

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      friends: data,
    },
  };
};

export default function Friends({ friends }) {
  console.log(friends[0]);
  const friendsInJSX = friends.map((friend) => {
    return (
      <div className={styles.friend}>
        <Link
          href={`/life/${friend.id}`}
          key={friend.id}
          className={styles.link}
        >
          <h3>{friend.name}</h3>
        </Link>
      </div>
    );
  });

  return (
    <div className={styles.friends}>
      <h2>All Noobs </h2>
      {friendsInJSX}
    </div>
  );
}
