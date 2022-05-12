import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('side-bar')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
