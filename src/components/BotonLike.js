import React, { useState } from 'react';
import './styles.css'; // Asegúrate de tener tu archivo de estilos importado correctamente

function LikeButton({ Comentarios }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    if (isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <button onClick={handleLikeClick} className={isLiked ? 'like-button liked' : 'like-button'}>
        {isLiked ? 'Me gusta' : 'Me gusta'}
      </button>
      <span className="likes-counter">{likes}</span>
      
    </div>
  );
}

export default LikeButton;


