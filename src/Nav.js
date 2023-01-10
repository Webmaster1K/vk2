import VKLogo from './VKLogo.jpg';
import './Nav.css';

function Nav() {
  let fotoProfile = <img className="fotoProfile" src="https://img3.goodfon.ru/original/1024x1024/6/65/les-ozero-kamni-rassvet.jpg" alt="фото_профиля"></img>,
      obj = {logo: <img src={VKLogo} className="VKLogo"></img>, search: <input type="search"></input>, bell: <img className="bell" src="https://free-png.ru/wp-content/uploads/2020/07/notification-yuo-tube.png" alt="колокол"></img>, profile: fotoProfile}
    return (
      <nav>
        <ul className="ul_nav">
          <li className="li_nav"><a href="#" className="a_nav">{obj.logo}</a></li>
          <li className="li_nav"><a href="#" className="a_nav" style={{'display': ['flex']}}>{obj.search}</a></li>
          <li className="li_nav"><a href="#" className="a_nav">{obj.bell}</a></li>
          <li className="li_nav"><a href="#" className="a_nav">{obj.profile}</a></li>
        </ul>
      </nav>
    );
  }
  
export default Nav;
  