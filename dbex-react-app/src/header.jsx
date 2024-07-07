import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">DBEX</div>
      <div className="middle-header">~My Company Name~</div>
      <div className="header-right">
        <a className="a-right-header">Home</a>
        <a className="a-right-header">My Account</a>
      </div>
    </header>
  );
}

export default Header;
