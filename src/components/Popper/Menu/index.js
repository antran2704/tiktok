import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItems';

const cx = classNames.bind(style);


function Menu({children,items = []}) {
    const renderItems = () => {
        return items.map(function(item,index) {
            return (
                <MenuItem key={index} data = {item}></MenuItem>
            )
        })
    }
    return ( 
        <Tippy
        delay={[0,700]}
        interactive
        placement='bottom-end'
        render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    {renderItems()}
                </PopperWrapper>
            </div>
        )}
    >
      {children}
    </Tippy>
     );
}

export default Menu;