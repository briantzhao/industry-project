import ny from '../../assets/images/New-York-Times-logo 1.svg';
import forbes from '../../assets/images/Forbes-logo 1.svg';
import bloomberg from '../../assets/images/New_Bloomberg_Logo 1.svg';
import '../OutroMain/OutroMain.scss';
import OutroCards from '../OutroCards/OutroCards';

export default function OutroMain(){
    return(
        <main className="features">
            <section className="features__box">
                <h3>FEATURED IN</h3>
                <div className="features__sub-box">
                    <img src={ny} />
                    <img src={forbes} />
                    <img src={bloomberg} />
                </div>
            </section>

            <section className="features__sub-box--bot">
                <h2 className="features__sub-title">Testimonials</h2>
                <p className="features__sub-txt">See what our customers say</p>
            </section>
            <OutroCards />
        </main>
    )
}