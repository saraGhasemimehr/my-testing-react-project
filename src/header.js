import ReactIcon from './React-icon.svg.png';

export default function Header(){
  return(
    <header>
    <nav className = 'nav'>
        <img className = 'nav-logo' src={ReactIcon} width='40px'></img>
        <h3 className = 'nav-h3'>ReactFacts</h3>
        <h4 className = 'nav-h4'>ReactCourse-Project1</h4>
    </nav>
    </header>
  )
}

