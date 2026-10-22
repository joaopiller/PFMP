import SectionTitle from "@/components/SectionTitle";
import CardMembro from "@/components/CardMembro";
import equipeMembers from "@/data/equipeMembers";
import styles from "./styles.module.css";

export default function HomeEquipe() {
  return (
    <section className={styles.equipeSection}>
      <div className={styles.equipeContainer}>
        <SectionTitle lightTitle="Nossa" boldTitle="Equipe" />
        <div className={styles.equipeMembers}>
          {equipeMembers.map((member) => (
            <CardMembro
              key={member.id}
              id={member.id}
              image={member.image}
              name={member.shortName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
