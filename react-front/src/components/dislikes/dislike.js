import React from 'react';
import './dislike.css';


export const Dislikes = ({ infoRaw, info }) => {
  // console.log(infoRaw, 'en dislikes');
  const currentUserID = localStorage.getItem('id');

  const findDislikes = () => {
    const dislikesLista = infoRaw.find((item) => {
      return item._id === currentUserID;
    }).dislikeDado;

    const listaLiked = infoRaw.filter(({ _id }) =>
      dislikesLista.includes(_id)
    );
    return listaLiked
  }

  return (
    <div className='dislike__container'>
      <h2>Dislikes:</h2>
      <div className='dislikes'>
        {info && findDislikes().map((item, i) => {
          return <p key={i}> {item.name}</p>
        })}
      </div>
    </div>
  )
}