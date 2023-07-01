import Header from "./Header/Header.jsx";
import Main from "./main/Main.jsx";
import Footer from "./footer/Footer.jsx";
import PopupWithForm from "./popupWithForm/PopupWithForm.jsx";
import ImagePopup from "./imagePopup/ImagePopup.jsx";
import { useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import api from "../utils/api";
import EditProfilePopup from "./editProfilePopup/EditProfilePopup.jsx";
import EditAvatarPopup from "./editAvatarPopup/EditAvatarPopup.jsx";
import AddPlacePopup from "./addPlacePopup/AddPlacePopup.jsx";

function App() {
  // Состояния попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  // const[isImagePopup, setIsImagePopup] = useState(false)

  //контекст
  const [currentUser, setCurrentUser] = useState({})

  // состояния карточек
  const [cards, setCards] = useState([])
  const [deleteCardId, setDeleteCardId] = useState('')

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
    setIsDeleteCardPopupOpen(false)
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

  function handleDeleteCardClick(cardId) {
    setDeleteCardId(cardId)
    setIsDeleteCardPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    // setIsImagePopup(true)
  }

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCard]) => {
        setCurrentUser(dataUser)
        setCards(dataCard)
      })
      .catch(console.error)
  }, [])

  function handleDeleteCardSubmit(event) {
    event.preventDefault()
    api.deleteCard(deleteCardId)
      .then(() => {
        setCards(cards.filter(card => {
          return card._id !== deleteCardId
        }))
        closeAllPopups()
      })
      .catch(console.error)
  }

  function handleUpdateUser (dataUser, formReset) {
    api.setUserInfo(dataUser)
    .then(res => {
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch(console.error)
  }

  function handleUpdateAvatar(dataUser, formReset) {
    api.setNewAvatar(dataUser)
    .then(res => {
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch(console.error)
  }

  function handleAddPlaceSubmit(newCard, formReset) {
    api.addNewCard(newCard)
    .then(newCard => {
      setCards([newCard, ...cards])
      closeAllPopups()
    })
    .catch(console.error)
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onDeleteCard={handleDeleteCardClick}
          cards={cards}
        />


        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} 
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        
        <EditAvatarPopup
           isOpen={isEditAvatarPopupOpen}
           onClose={closeAllPopups}
           onUpdateAvatar={handleUpdateAvatar} 
         />

        <PopupWithForm
          name='delete'
          title='Вы уверены?'
          titleButton='Да'
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleDeleteCardSubmit}
        />

        <ImagePopup
          card={selectedCard}
          // isOpen={isImagePopup} 
          onClose={closeAllPopups}
        />


      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;