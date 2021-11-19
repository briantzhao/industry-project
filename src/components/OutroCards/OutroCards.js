import angelina from '../../assets/images/angelina.jpeg';
import charles from '../../assets/images/charles.jpeg';
import david from '../../assets/images/david.jpeg';
import '../OutroCards/OutroCards.scss';

export default function OutroCards(){
    return(
        <div className="card">
        <article className="card__box">
            <div className="card__box--2">
                <p className="card__txt">"I used to think that the crypto currency world was a man's world. Thank you for showing me otherwise."</p>
                <div className="card__sub-box">
                    <img className="card__avatar" src={angelina} alt="avatar"/>
                    <p>Angelina, 25</p>
                </div>
            </div>
        </article>

        <article className="card__box">
            <div className="card__box--2">
                <p className="card__txt">"Once you start it's not that intimidating. My whole family uses Robinhood."</p>
                <div className="card__sub-box">
                    <img className="card__avatar" src={charles} alt="avatar" />
                    <p>Charles, 32</p>
                </div>
            </div>
        </article>

        <article className="card__box">
            <div className="card__box--2">
                <p className="card__txt">"Accessible and friendly support staff. Can't be beat on customer service."</p>
                <div className="card__sub-box">
                    <img className="card__avatar" src={david} alt="avatar"/>
                    <p>David, 60</p>
                </div>
            </div>
        </article>
        </div>
    )
}