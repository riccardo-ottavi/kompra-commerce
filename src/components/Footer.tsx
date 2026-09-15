import instaIcon from "../assets/instagram-brands-solid-full-purple.svg"
import gitHubIcon from "../assets/github-brands-solid-full.svg"
import linkedinIcon from "../assets/linkedin-brands-solid-full.svg"

export default function Footer() {
    return (
        <footer>
            <ul className="social-icons-list">
                <li><a href="https://www.instagram.com/sfaso2026/"><img className="social-icon" src={instaIcon} alt="" /></a></li>
                <li><a href="https://github.com/riccardo-ottavi"><img className="social-icon" src={gitHubIcon} alt="" /></a></li>
                <li><a href="https://www.linkedin.com/in/riccardo-ottavi-b542533b8/"><img className="social-icon" src={linkedinIcon} alt="" /></a></li>
            </ul>
        </footer>

    )
}