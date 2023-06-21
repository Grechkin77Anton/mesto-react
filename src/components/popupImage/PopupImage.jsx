export default function PopupImage() {
    return (
        <div className="popup popup_type_image">
        <div className="popup__image-container">
          <img className="popup__image" src="#" alt="#" />
          <p className="popup__image-title" />
          <button
            type="button"
            className="popup__close popup__close_place_image-container"
          />
        </div>
      </div>
    )
}