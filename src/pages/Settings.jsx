import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
function Settings() {
  const [settings, setSettings] = useState({
    '--background-color': 'white',
    '--background-light': 'white',
    '--shadow-color': 'rgba(0, 0, 0, 0.2)',
    '--primary-color': 'rgb(46, 95, 160)',
    '--primary-color-opacity': 'rgb(46, 95, 160, 0.7)',
    '--text-color': 'black',
    '--text-light': 'rgb(114, 112, 112)',
    '--font-size': '16px'
  })
  const themes = [
    {
      '--background-color': 'white',
      '--background-light': 'white',
      '--shadow-color': 'rgba(0, 0, 0, 0.2)',
      '--text-color': 'black',
      '--text-light': 'rgb(114, 112, 112)',
    },
    {
      '--background-color': 'rgb(27, 26, 26)',
      '--background-light': 'rgb(77, 77, 77)',
      '--shadow-color': 'rgba(0, 0, 0, 0.2)',
      '--text-color': 'white',
      '--text-light': '#9e9a9a',
    }
  ]
  const[theme,setTheme] = useState('light')
  const[primaryColor,setPrimaryColor] = useState(0)
  const primaryColors = [
    'rgb(46, 95, 160)',
    'rgb(67, 190, 18)',
    'rgb(223, 33, 106)',
    'rgb(188, 14, 241)',
    'rgb(248, 244, 10)',
    'rgb(11, 172, 172)'
  ]
  const primaryColorsOpacity = [
    'rgb(46, 95, 160, 0.7)',
    'rgb(67, 190, 18, 0.7)',
    'rgb(223, 33, 106, 0.7)',
    'rgb(188, 14, 241, 0.7)',
    'rgb(248, 244, 10, 0.7)',
    'rgb(11, 172, 172, 0.7)'
  ]
  useEffect(() => {
    const root = document.documentElement
    for(let key in settings){
      root.style.setProperty(key, settings[key])
    }
  },[settings])

  function changeTheme(index){
    const _theme = {...themes[index]}
    setTheme(index == 0 ? 'light' : 'dark')
    let _settings = {...settings}
    for(let key in _theme){
      _settings[key] = _theme[key]
    }
    setSettings(_settings)
  }

  function changeColor(i){
    const _color = primaryColors[i]
    const _colorOpacity = primaryColorsOpacity[i]
    let _settings = {...settings}
    _settings['--primary-color'] = _color
    _settings['--primary-color-opacity'] = _colorOpacity
    setPrimaryColor(i)
    setSettings(_settings)
  }
  return (
    <>
      <div className="settings-section">
        <h2 className="theme-title serif">Modify your theme</h2>
        <div className="option-container">
          <div className="option light" onClick={() => changeTheme(0)}>
            {theme == 'light' && (
            <div className="check">
              <FaCheck style={{ width: '1.5em', height: '1.5em'}}/>
            </div>
            ) }
          </div>
          <div className="option dark" onClick={() => changeTheme(1)}>
            {theme == 'dark' && (
            <div className="check">
              <FaCheck style={{ width: '1.5em', height: '1.5em'}}/>
            </div>
            ) } 
          </div>
        </div>
      </div>
      <div className="settings-section">
        <h2 className="theme-title serif">Choose your color</h2>
        <div className="option-container">
          {primaryColors.map((el,index) => (
          <div className="option light" style={{backgroundColor: el}} key={index} onClick={() => changeColor(index) }>
            {primaryColor == index && (
            <div className="check">
              <FaCheck style={{ width: '1.5em', height: '1.5em'}}/>
            </div>
            ) }
          </div>))}
        </div>
      </div>
    </>
  );
}

export default Settings;