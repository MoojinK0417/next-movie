"use client";

import { useState } from "react";
import MovieCredits from "./movie-credits";
import MovieVideos from "./movie-videos";
import styles from "../styles/movie-navigation.module.css";
import MovieSimilar from "./movie-similar";

export default async function MovieNavigation({ id }: { id: string }) {
  const [visibleSection, setVisibleSection] = useState("videos");

  const handleButtonClick = (section: string) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => handleButtonClick("credits")}
          disabled={visibleSection === "credits"}
        >
          Credits
        </button>
        <button
          className={styles.button}
          onClick={() => handleButtonClick("videos")}
          disabled={visibleSection === "videos"}
        >
          Videos
        </button>
        <button
          className={styles.button}
          onClick={() => handleButtonClick("similar")}
          disabled={visibleSection === "similar"}
        >
          Similar
        </button>
      </div>

      {visibleSection === "credits" && <MovieCredits id={id} />}
      {visibleSection === "videos" && <MovieVideos id={id} />}
      {visibleSection === "similar" && <MovieSimilar id={id} />}
    </div>
  );
}
