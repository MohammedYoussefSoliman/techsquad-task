import scss from './navbar.module.scss';

const Navbar = () => {
  return (
    <header className={scss['nav']}>
      <nav className={[scss['nav--bar'], scss['container']].join(' ')}>
          <h3 className={scss['nav--bar__brand']}>
              newsbuzz
          </h3>
          <div className={scss["nav--bar__actions"]}>
            <button className={scss["nav--btn"]}>login</button>
            <button className={[scss["nav--btn"], scss["btn__invert"]].join(' ')}>Register</button>
          </div>
      </nav>
    </header>
  );
}
 
export default Navbar;