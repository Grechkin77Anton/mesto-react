import { useEffect, useState } from "react";
import api from "../../utils/api";

export default function ButtonLike({likes, myId, cardId}) {
    const [isLiked, setIsLiked] = useState(false);
    const [count, setIsCount] = useState(likes.length);

    useEffect(() => {
        setIsLiked(likes.some(item => myId === item._id))
    }, [likes, myId])

    function handleCardLike() {
        if(isLiked) {
            api.deleteLike(cardId)
            .then( res => {
                setIsLiked(false)
                setIsCount(res.likes.length)
            })
            .catch(console.error)
        } else {
            api.addCardLike(cardId)
            .then(res => {
                setIsLiked(true)
                setIsCount(res.likes.length)
            })
            .catch(console.error)
        }
    }

    return (
        <>
          <button type="button" className={`element__like ${isLiked ? 'element__like_active' : ""}`} onClick={handleCardLike}/> 
          <span className="element__counter">{count}</span>
        </>
    )
} 