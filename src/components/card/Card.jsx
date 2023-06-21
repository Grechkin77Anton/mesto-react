export default function Card({card, onCardClick}) {
    return (
        <article className="element">
            <img className="element__photo" src={card.link} alt={card.name} onClick={() => onCardClick({link:card.link, name:card.name})}/>
            <button type="button" className="element__remove element__remove-disabled" />
            <div className="element__reaction">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__reaction-wrapper">
                    <button type="button" className="element__like" />
                    <span className="element__counter" />
                </div>
            </div>
        </article>
    )
} 