import style from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);
function Header() {
    return <header className={cx('wrapper')}>
        <div className= {cx('content')}>hello</div>
    </header>;
}

export default Header;
