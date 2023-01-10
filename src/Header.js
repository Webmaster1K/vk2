import './Header.css';
import Categories from './Сategories.js';
import Tape from './Tape.js';

function Header() {
    return (
        <header>
            <Tape/>
            <Categories/>
        </header>
    );
  }
  
export default Header;