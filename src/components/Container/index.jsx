import './style.css';
import Header from '../Header';
import Knowledge from '../Knowledge';
import Projects from '../Projects';
import Services from '../Services';
import AboutMe from '../AboutMe';

function Container() {
    return (
        <div>
            <Header/>
            <AboutMe/>
            <Services/>
            <Knowledge/>
            <Projects/>
        </div>
    )
}

export default Container