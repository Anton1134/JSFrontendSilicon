import React from 'react'
import LogoType from '../assets/Images/Logo.svg'

const Header = () => {
  return (
    <header>
      <div className="container">

        <a id="silicon-logo" href="#">
          <img src={LogoType} alt="Logotype" />
          </a>

          <nav>
            <a className="nav-features" href="#">Features</a>
          </nav>

          <div className="toggle-switch">
            <span>Dark mode</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
          </div>

          <a id="auth-signin" href="#" className="btn-primary">
            <i className="fa-thin fa-user fa-flip-horizontal"></i>
            <span>Sign in / up</span>
          </a>
      </div>
    </header>
  )
}

export default Header