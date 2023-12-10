import './styles/app.css'

function Navbar() {
  return (
    <nav>
      <ul className='primary-navbar'>
        <li className='nav-button'>
            О нас 
        </li>
        <li className='nav-button'>
            Услуги 
        </li>
        <li className='nav-button'>
            Аренда
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;