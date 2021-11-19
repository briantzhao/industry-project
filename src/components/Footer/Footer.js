import SocialMedia from "../SocialMedia/SocialMedia";
import Subscribe from "../Subscribe/Subscribe";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__list">
                <ul>
                    <li>Stocks{"&"}Funds</li>
                    <li>Options</li>
                    <li>Gold</li>
                    <li>Cash Management</li>
                    <li>Crypto</li>
                </ul>

                <ul>
                    <li>Learn</li>
                    <li>Support</li>
                    <li>Snacks</li>
                </ul>

                <ul>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Affiliates</li>
                    <li>Blog</li>
                    <li>Investor Relations</li>
                    <li><SocialMedia /></li>
                </ul>
            </div>
            <div>
                <Subscribe />
                <ul>
                    <li>Check the background of the firm on FINRA's BrokerCheck</li>
                    <li>Brokerage Customer Relationship Summary</li>
                    <li>Robinhood Terms {"&"} Conditions</li>
                    <li>Disclosure Library</li>
                    <li>Privacy</li>
                </ul>
            </div>
        </footer>
    )
}