import { useEffect, useState } from "react"
import api from "../../utils/api"
import Card from "../card/Card"

export default function Main({onEditProfile,  onAddPlace , onEditAvatar, onCardClick}) {

  const[userName,setUserName] = useState('')
  const[userDescription,setUserDescription] = useState('')
  const[userAvatar,setUserAvatar] = useState('')
  const[cards, setCards] = useState([])

 

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    setUserName(dataUser.name)
    setUserDescription(dataUser.about)
    setUserAvatar(dataUser.avatar)
    dataCard.forEach(data => data.myid = dataUser._id) 
    setCards(dataCard)
    });
  }, [])

    return (
        <main className="content">
        <section className="profile">
          <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
            <img
              className="profile__avatar"
              src={userAvatar}
              name="avatar"
              alt="Аватар на странице"
            />
          </button>
          <div className="profile-info">
            <h1 className="profile-info__author">{userName}</h1>
            <p className="profile-info__description">{userDescription}</p>
          </div>
          <button type="button" className="profile__edit-button" onClick={onEditProfile} />
          <button type="button" className="profile__add-button" onClick={onAddPlace}/>
        </section>
        <section className="elements">{cards.map(data => {
          return ( 
            <div className="elements__list" key = {data._id}>
              <Card card = {data} onCardClick={onCardClick}/>
            </div> 
          )
        })} </section>
      </main>
    )
}