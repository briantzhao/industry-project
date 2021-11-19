import snacks from '../../assets/robinhood-snacks.svg';
export default function Subscribe(){
    return(
        <>
        <img src={snacks} />
        <p>The 3-minute newsletter with fresh takes on the financial news you need to start your day.</p>
        <form>
            <input type="submit" id="email" value="submit" placeholder="name@email.com"></input>
        </form>
        </>
    )
}