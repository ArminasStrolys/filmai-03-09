import React from 'react';

const Header = () => {
    return (
        <div>
            <header className='navbar navbar-light bg-light'>
                <nav className='container-fluid'>
                    <div className='container'>
                        <a className='navbar-brand' href="/#">Movie searcher</a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
