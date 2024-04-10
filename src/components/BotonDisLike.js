import React, { useState } from 'react';

import './styles.css'; // Asegúrate de tener tu archivo de estilos importado correctamente

function DislikeButton({ commentId }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [isDisliked, setIsDisliked] = useState(false);

  function handleDislikeClick() {
    if (isDisliked) {
      setDislikes(dislikes + 1);
    } else {
      setLikes(likes + 1); // Resta un "like"
      setDislikes(dislikes + 1); // Suma un "dislike"
    }
    setIsDisliked(!isDisliked);
  };

  return (
    <div>
      <button onClick={handleDislikeClick} className={isDisliked ? 'dislike-button disliked' : 'dislike-button'}>
        {isDisliked ? 'No Me Gusta' : 'No Me Gusta'}
      </button>
      <span className="dislikes-counter">{dislikes}</span>
      {/* <span>Comment ID: {commentId}</span> */}
    </div>
  );
}

export default DislikeButton;