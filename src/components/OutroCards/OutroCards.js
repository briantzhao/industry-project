import angelina from '../../assets/images/angelina.jpeg';
import charles from '../../assets/images/charles.jpeg';
import david from '../../assets/images/david.jpeg';
import '../OutroCards/OutroCards.scss';

export default function OutroCards(){
    return(
        <div className="card">
        <article className="card__box">
            <p className="card__txt">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."</p>
            <div className="card__sub-box">
                <img className="card__avatar" src={angelina} alt="avatar"/>
                <p>Angelina, 25</p>
            </div>
        </article>

        <article className="card__box">
            <p className="card__txt">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."</p>
            <div className="card__sub-box">
                <img className="card__avatar" src={charles} alt="avatar" />
                <p>Charles, 32</p>
            </div>
        </article>

        <article className="card__box">
            <p className="card__txt">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."</p>
            <div className="card__sub-box">
                <img className="card__avatar" src={david} alt="avatar"/>
                <p>David, 60</p>
            </div>
        </article>
        </div>
    )
}