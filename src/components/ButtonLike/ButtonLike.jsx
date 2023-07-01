import { useEffect, useState } from "react";
// import api from "../../utils/api";

export default function ButtonLike({myId, card, onCardLike}) {
    const [isLiked, setIsLiked] = useState(false);
    // const [count, setIsCount] = useState(likes.length);

    useEffect(() => {
        setIsLiked(card.likes.some(item => myId === item._id))
    }, [card, myId])

    // function handleCardLike() {
    //     if(isLiked) {
    //         api.deleteLike(cardId)
    //         .then( res => {
    //             setIsLiked(false)
    //             setIsCount(res.likes.length)
    //         })
    //         .catch(console.error)
    //     } else {
    //         api.addCardLike(cardId)
    //         .then(res => {
    //             setIsLiked(true)
    //             setIsCount(res.likes.length)
    //         })
    //         .catch(console.error)
    //     }
    // }

    return (
        <>
          <button type="button" className={`element__like ${isLiked ? 'element__like_active' : ""}`} onClick={() => onCardLike(card)} /> 
          <span className="element__counter">{card.likes.length}</span>
        </>
    )
} 