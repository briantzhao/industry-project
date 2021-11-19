import snacks from '../../assets/images/snacks.svg';
import '../Subscribe/Subscribe.scss';

export default function Subscribe(){
    return(
        <div className="sub">
        <img src={snacks} alt="snacks"/>
        <p>The 3-minute newsletter with fresh takes on the financial news you need to start your day.</p>
        <form className="sub__form">
            <input className="sub__txt" type="text" id="email" placeholder="name@email.com"></input>
            <input className="sub__btn" type="submit" value="Subscribe"></input>
        </form>
        </div>
    )
}