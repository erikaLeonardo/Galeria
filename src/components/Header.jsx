import React from 'react';

const Header = ({text}) => {
    return(
        <header className='col-12 fixed-top'>
          <h1 className='col-12 bg-success text-light fs-3 text-center shadow mb-4 p-3'>
            {text}
          </h1>
      </header>
    )
}
export default Header;