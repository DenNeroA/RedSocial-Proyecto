import React, { useState } from 'react';
import LikeButton from './BotonLike'; // Importa el componente LikeButton
import DislikeButton from './BotonDisLike'; // Importa el componente DislikeButton
function NewCommentForm  ({ onAddComment })  {
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() === '') {
      // Evitar comentarios vacíos
      return;
    }
    //  nuevo comentario
    onAddComment(newComment);
    // Limpiar el campo de entrada después de agregar el comentario
    setNewComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newComment}
        onChange={handleInputChange}
        placeholder="Escribe tu comentario aquí..."
      />
      <button type="submit">Agregar Comentario</button>
      <div>
        {/* Renderiza los botones LikeButton y DislikeButton dentro del formulario */}
        <LikeButton Comentarios="ID del Comentario" />
        <DislikeButton commentId="ID del Comentario" />
      </div>
    </form>
  );
}

export default NewCommentForm;