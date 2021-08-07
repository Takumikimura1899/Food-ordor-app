import mealsImage from '../../assets/meals.jpg';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Reactミール</h1>
        <button>カート</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='テーブルいっぱいの美味しそうな料理たち' />
      </div>
    </>
  );
};

export default Header;
