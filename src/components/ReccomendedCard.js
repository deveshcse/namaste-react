const ReccomendedCard = (props) => {


    const {card} = props.card;

    const {id, name, description, imageId, defaultPrice, finalPrice, price} = card.info;
    // console.log(card.info)

    const {aggregatedRating} = card.info.ratings;
    
    return(
        <div className="reccomended">
            
            <div className="mainContainer">
            <p></p>
            <div><h4>{name}</h4></div>
            <div>{defaultPrice/100 || finalPrice/100 || price/100}</div>
            <div> {aggregatedRating.rating}({aggregatedRating.ratingCountV2}) </div>
            <div>{description}</div>
            </div>

            <div>
            <div>imageId</div>
            <div>addon button</div>
            </div>
            
        </div>
        
    )
}

export default ReccomendedCard;