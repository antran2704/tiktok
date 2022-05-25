import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Menu.module.scss'

const cx = classNames.bind(style);

function Header({title,onBack}) {
   
    return ( 
      <header className= {cx('header')}>
          <button className= {cx('back-btn')} onClick = {onBack}>
              <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <h4 className= {cx('header-title')}>{title}</h4>
      </header>
     );
}

export default Header;