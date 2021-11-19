import linkedin from '../../assets/icons/linkedin.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';

export default function SocialMedia(){
    return(
        <ul>
            <li>
                <a target="_blank" href="https://www.linkedin.com/company/robinhood/"><img src={linkedin} alt="linkedin"/></a>
            </li>
            <li>
                <a target="_blank" href="https://www.facebook.com/robinhoodapp"><img src={facebook} alt="facebook"/></a>
            </li>
            <li>
                <a target="_blank" href="https://www.instagram.com/robinhoodapp/"><img src={instagram} alt="instagram"/></a>
            </li>
            <li>
                <a target="_blank" href="https://twitter.com/RobinhoodApp"><img src={twitter} alt="twitter"/></a>
            </li>
        </ul>   
    )
}