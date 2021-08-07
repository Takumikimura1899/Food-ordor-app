import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'すし',
    description: '新鮮なネタとこだわりのシャリ',
    price: 1980,
  },
  {
    id: 'm2',
    name: 'カツレツ',
    description: '特別な一品!',
    price: 1700,
  },
  {
    id: 'm3',
    name: 'バーベキューバーガー',
    description: '食べ応え抜群！定番のファストフード',
    price: 1200,
  },
  {
    id: 'm4',
    name: 'サラダ',
    description: 'ヘルシーな野菜はいかが？',
    price: 980,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
