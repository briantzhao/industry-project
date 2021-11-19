import SocialMedia from "../SocialMedia/SocialMedia";
import Subscribe from "../Subscribe/Subscribe";
import '../Footer/Footer.scss';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__box">
                <ul className="footer__list">
                    <li>Stocks{" & "}Funds</li>
                    <li>Options</li>
                    <li>Gold</li>
                    <li>Cash Management</li>
                    <li>Crypto</li>
                </ul>

                <ul className="footer__list">
                    <li>Learn</li>
                    <li>Support</li>
                    <li>Snacks</li>
                </ul>

                <ul className="footer__list">
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Affiliates</li>
                    <li>Blog</li>
                    <li>Investor Relations</li>
                    <li><SocialMedia /></li>
                </ul>
            </div>
            <div className="footer__box--right">
                <Subscribe />
                <ul className="footer__list--right">
                    <li className="footer__item">Check the background of the firm on FINRA's BrokerCheck</li>
                    <li className="footer__item">Brokerage Customer Relationship Summary</li>
                    <li className="footer__item">Robinhood Terms {"&"} Conditions</li>
                    <li className="footer__item">Disclosure Library</li>
                    <li className="footer__item">Privacy</li>
                </ul>
            </div>
        </footer>
    )
}