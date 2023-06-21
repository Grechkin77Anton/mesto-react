export default function Main({onEditProfile,  onAddPlace , onEditAvatar}) {
    return (
        <main className="content">
        <section className="profile">
          <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
            <img
              className="profile__avatar"
              src="#"
              name="avatar"
              alt="Аватар на странице"
            />
          </button>
          <div className="profile-info">
            <h1 className="profile-info__author"> </h1>
            <p className="profile-info__description" />
          </div>
          <button type="button" className="profile__edit-button" onClick={onEditProfile} />
          <button type="button" className="profile__add-button" onClick={onAddPlace}/>
        </section>
        <section className="elements" />
      </main>
    )
}