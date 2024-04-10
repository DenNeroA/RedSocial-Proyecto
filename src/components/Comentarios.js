import React from 'react';


function Comentarios  ({ comentarios })  {
  return (
    <div>
      <h2>Comentarios</h2>
      <ul>
        {comentarios.map((commentId, index) => (
          <li key={index}>{commentId}</li>
        ))}
      </ul>
      
    </div>


  );
};

export default Comentarios;