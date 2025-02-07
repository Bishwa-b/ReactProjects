export default function DarkMode(props){
    const modeIcon = props.isSwitch
    ? 'src/assets/light-mode.png'
    : 'src/assets/night-mode.png';

  const altMsg = props.isSwitch ? 'light Mode' : 'Dark Mode';

    return(
        <button className="bgButton" onClick={props.toggle}>
            <img src={modeIcon} alt={altMsg} className="modes" />
        </button>
    )
}