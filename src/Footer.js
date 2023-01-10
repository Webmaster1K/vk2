import './Footer.css';

function Footer() {
    let year = new Date().getFullYear();
    return (
      <footer>
        ©copyright все права защищены {year} год
      </footer>
    );
}
  
export default Footer;