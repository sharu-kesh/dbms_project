function Card({imageUrl,title,text,page}){
    return(
        <div className="card_container">
        <div className="card">
            <img className="card-img" src={imageUrl} alt=""  />
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
            <a href={page}><button>More</button></a>
        </div>
        </div>
    )
}
export default Card