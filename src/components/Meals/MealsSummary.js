import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <>
      <section className={classes.summary}>
        <h2>美味しい料理をあなたへお届けします。</h2>
        <p>この中からお選びください。</p>
        <p>最高のシェフが手作りしている、最高の料理をお届けします！</p>
      </section>
    </>
  );
};

export default MealsSummary;
