import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import image from '~/assets/imgs';
import style from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(image.noImage);
    };
    return (
        <img
            className={classNames(style.wrapper, className)}
            {...props}
            ref={ref}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
