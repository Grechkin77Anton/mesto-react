import Header from "./Header/Header.jsx";
import Main from "./main/Main.jsx";
import Footer from "./footer/Footer.jsx";
import PopupWithForm from "./popupWithForm/PopupWithForm.jsx";
import ImagePopup from "./imagePopup/ImagePopup.jsx";
import {useState} from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  const[selectedCard, setSelectedCard] = useState(null)
  // const[isImagePopup, setIsImagePopup] = useState(false)

  // console.log(selectedCard)


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
    // setIsImagePopup(false)
  }

  function handleEditProfileClick() { 
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() { 
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() { 
    setIsEditAvatarPopupOpen(true)
  }
  function handleCardClick(card) {
    setSelectedCard(card)
    // setIsImagePopup(true)
  }
  

  return (
    <div className="page">
      
      <Header />

      <Main
      onEditProfile = {handleEditProfileClick} 
      onAddPlace = {handleAddPlaceClick}
      onEditAvatar = {handleEditAvatarClick}
      onCardClick = {handleCardClick}
      />
      
      
      <Footer />

      <PopupWithForm 
      name='edit-profile'
      title='Редактировать профиль'
      titleButton='Сохранить'
      isOpen = {isEditProfilePopupOpen}
      onClose = {closeAllPopups}
      >
        
        <input
                  type="text"
                  className="popup__input"
                  name="username"
                  id="name"
                  placeholder="Имя"
                  minLength={2}
                  maxLength={40}
                  required=""
                />
                <span
                  id="name-error"
                  className="popup__error popup__error_type_name"
                />
                <input
                  type="text"
                  className="popup__input"
                  name="description"
                  id="description"
                  placeholder="О себе"
                  minLength={2}
                  maxLength={200}
                  required=""
                />
                <span
                  id="description-error"
                  className="popup__error popup__error_type_description"
                />
      </PopupWithForm>

      <PopupWithForm 
      name='add-card'
      title='Новое место'
      titleButton='Создать'
      isOpen = {isAddPlacePopupOpen}
      onClose = {closeAllPopups}
      >
        <input
                  type="text"
                  className="popup__input "
                  name="name"
                  id="place-title"
                  placeholder="Название места"
                  minLength={2}
                  maxLength={30}
                  required=""
                />
                <span
                  id="place-title-error"
                  className="popup__error popup__error_type_place-title"
                />
                <input
                  type="url"
                  className="popup__input"
                  name="link"
                  id="place-link"
                  placeholder="Ссылка на фото"
                  required=""
                />
                <span
                  id="place-link-error"
                  className="popup__error popup__error_type_place-link"
                />
      </PopupWithForm>

      <PopupWithForm 
      name='edit-avatar'
      title='Обновить аватар'
      isOpen={isEditAvatarPopupOpen}
      onClose = {closeAllPopups}
      >
        <input
              type="url"
              className="popup__input"
              name="avatar"
              id="avatar"
              placeholder="Ссылка на новый аватар"
              required=""
                />
        <span
              id="avatar-error"
              className="popup__error popup__error_type_avatar"
                />
      </PopupWithForm>

      <PopupWithForm 
      name='delete'
      title='Вы уверены?'
      titleButton='Да' />
      
      <ImagePopup 
      card={selectedCard} 
      // isOpen={isImagePopup} 
      onClose = {closeAllPopups}
      />


   </div>

  );
}

export default App;
