import { text } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({
    to,
    href,
    children,
    disable,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    onClick,
    icon,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick: onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary: primary,
        outline: outline,
        small: small,
        large: large,
        text: text,
        disable: disable,
        rounded: rounded,
    });

    if (disable) {
        Object.keys(props).forEach(function (key) {
            console.log(key);
            if (key.startsWith('on') && typeof key === 'function') {
                delete props[key];
            }
        });
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
            {icon && <span className={cx('icon')}>{icon}</span>}
        </Comp>
    );
}

export default Button;
