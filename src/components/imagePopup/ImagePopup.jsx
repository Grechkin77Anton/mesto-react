export default function ImagePopup({card, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_image ${isOpen && 'popup_opened'}`}>
        <div className="popup__image-container">
          <img className="popup__image" src={card.link} alt={card.name} />
          <p className="popup__image-title">{card.name}</p>
          <button
            type="button"
            className="popup__close popup__close_place_image-container"
            onClick={onClose}
          />
        </div>
      </div>
    )
}