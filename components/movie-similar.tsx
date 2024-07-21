import { API_URL } from "../app/constants";
import styles from "../styles/movie-similar.module.css";

async function getSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similar = await getSimilar(id);

  return (
    <div className={styles.container}>
      {similar.map((similar) => (
        <div>
          <img
            key={similar.id}
            src={`${similar.poster_path}`}
            title={similar.title}
          />
          <div className={styles.title}>{similar.title}</div>
        </div>
      ))}
    </div>
  );
}
