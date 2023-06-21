export default function PopupWithForm({name, title,titleButton, children, isOpen, onClose}) {
   
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
          <div className="popup__container">
            <h2 className="popup__title">{title}</h2>
            <form
              noValidate=""
              method="POST"
              name={name}
              className="popup__inputs popup__form">
                {children}
              <div className="popup__input-container">
                <button
                  type="submit"
                  className="popup__button-save popup__button">
                  {titleButton || 'Сохранить'}
                </button>
              </div>
            </form>
            <button type="button" className="popup__close" onClick={onClose}/>
          </div>
         
      </div>
    )
}