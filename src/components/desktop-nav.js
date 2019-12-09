import * as React from 'react';
import {Block} from 'baseui/block';
export default () => {
  return (
    <Block
      height={['20px', '40px', '80px', '160px']}
      backgroundColor="primary200"
    />
  );
};


// NavLink appears only on desktop
const NavLink = props => <Block display={['none', 'block']} {...props} />;