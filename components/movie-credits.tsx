import { API_URL } from "../app/constants";
import styles from "../styles/movie-credits.module.css";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);

  const creditsWithPlaceholder = credits.map(
    (credit: { profile_path: any }) => {
      if (!credit.profile_path) {
        return {
          ...credit,
          profile_path: "https://via.placeholder.com/200x300",
        };
      }
      return credit;
    }
  );

  return (
    <div className={styles.container}>
      {creditsWithPlaceholder.map((credit) => (
        <div>
          <iframe
            className={styles.iframe}
            key={credit.id}
            src={`${credit.profile_path}`}
          />
          <div className={styles.creditName}>{credit.name}</div>
        </div>
      ))}
    </div>
  );
}
