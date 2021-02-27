import scss from './navbar.module.scss';
import IconButton from '@material-ui/core/IconButton';
import {GiHamburgerMenu} from 'react-icons/gi';


const Navbar = ({setOpenDrawer}) => {
  return (
    <header className={scss['nav']}>
      <nav className={[scss['nav--bar'], scss['container']].join(' ')}>
          <h3 className={scss['nav--bar__brand']}>
              newsbuzz
          </h3>
          <div className={scss["nav--bar__actions"]}>
            <button className={scss["nav--btn"]}>login</button>
            <button className={[scss["nav--btn"], scss["btn__invert"]].join(' ')}>Register</button>
            <IconButton
              onClick={()=>setOpenDrawer(true)}
              className={scss["nav--menu"]}>
              <GiHamburgerMenu />
            </IconButton>
          </div>
      </nav>
    </header>
  );
}
 
export default Navbar;