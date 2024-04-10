import React, { useState } from 'react';
import TextoPublicacion from './TextoPublicacion';
import BotonLike from './BotonLike';
import Comentarios from './Comentarios';
import NewCommentForm from './NewCommetForm';
import BotonDisLike from './BotonDisLike';



function Publicacion  ()  {
  const [likes, setLikes] = useState(0);
  const [comentarios, setComentarios] = useState([]);

  function handleLikeClick  () {
    setLikes(likes + 1);
  };

  const handleAddComentario = (nuevoComentario) => {
    setComentarios([...comentarios, nuevoComentario]);
  };

  return (
    <div>
      <TextoPublicacion texto="¡Hola Comunidad! Esta es nuestro emprendimiento, esperamos su agradable visita ." />
      <BotonLike onClick={handleLikeClick} cantidadLikes={likes} />
      <BotonDisLike onClick={handleLikeClick} cantidadLikes={likes} />
      <Comentarios comentarios={comentarios} />
      <NewCommentForm onAddComment={handleAddComentario} />
    </div>
  );
};

export default Publicacion;