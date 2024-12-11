import LogoType from '../assets/Images/Logo.svg'
import React, { useEffect, useState} from 'react'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedThemeMode = localStorage.getItem('themeMode')

    if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }

  }, [])

  const handleThemeToggle = () => {
      if (isDarkMode) {
        setIsDarkMode(false)
        localStorage.setItem('themeMode', 'light')
        document.documentElement.classList.remove('dark')
      } else {
        setIsDarkMode(true)
        localStorage.setItem('themeMode', 'dark')
        document.documentElement.classList.remove('dark')
      }
  }


  return (
    <header>
      <div className="container">

        <a id="silicon-logo" href="#">
          <img src={LogoType} alt="Logotype" />
          </a>

          <nav>
            <a className="nav-features" href="#">Features</a>
          </nav>

          <div className="toggle-switch" htmlFor="darkmode-switch" aria-label="darkmode switch">
            <span>Dark mode</span>
              <label className="switch" htmlFor="switch">
                <input id="switch" type="checkbox" checked={isDarkMode} onChange={handleThemeToggle} />
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