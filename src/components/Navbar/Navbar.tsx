import './Navbar.css';
import iconShape from '../../assets/shape.svg';
import logo from '../../assets/WoelFel.svg';
import user from '../../assets/user.png';
import iconChevron from '../../assets/chevron.svg'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={iconShape} alt="icon-burger" />
        </li>
        <li>
          <img src={logo} alt="logo" />
        </li>
        <li>
          <input type="text" className='search' placeholder='Search...' />
        </li>
        <li className='info-user'>
          <img src={user} alt="image" />
          <span className='name'>Randall Cohen</span>
        </li>
        <li>
          <img src={iconChevron} alt="icon-arrow" className='icon-arrow' />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar