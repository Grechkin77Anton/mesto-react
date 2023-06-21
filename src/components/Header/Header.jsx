import logo from '../../images/logo-white.png';

export default function Header() {
    return (
        <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип Место Россия"
        />
      </header>
    )
}