import React from 'react';
import { Link } from 'react-router-dom';

const  Button = props => {
  const {linkUrl, history, title, className,...anotherProps} = props;
  return(
    <Link
      className={className}
      to={linkUrl}
      {...anotherProps}
    >
      {title}
    </Link>
  );
}

export default Button;