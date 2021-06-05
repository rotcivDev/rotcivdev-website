import React from 'react';
import { withRouter } from 'react-router-dom';

function Button({linkUrl, history, match, title, className}) {
  // const css = `${className}`;
  return(
    <nav
      className={className}
      onClick={() => history.push(`${linkUrl}`)}
    >
      {title}
    </nav>
  );
}

export default withRouter(Button);