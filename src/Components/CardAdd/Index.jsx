import './style.css'


function CardAdd(props) {
    return (
        <div className="card">
            <div>
                <img src={props.img} alt="segurança" />
            </div>
            <div>
                <h2>{ props.title }</h2>
                <p>{ props.about }</p>
            </div>
        </div>
    )
}

export default CardAdd;