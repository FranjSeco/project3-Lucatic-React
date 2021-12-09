import React from 'react';
import './likes.css';


export const Likes = ({ infoRaw, info }) => {
  // console.log(infoRaw, 'en likes');
  const currentUserID = localStorage.getItem('id');

  const findLikes = () => {
    const dislikesLista = infoRaw.find((item) => {
      return item._id == currentUserID;
    }).likesDado;

    const listaLiked = infoRaw.filter(({ _id }) =>
      dislikesLista.includes(_id)
    );
    // console.log(listaLiked);
    return listaLiked

  }


  return (
    <div className='likes__container'>
      <h2>Likes:</h2>
      <div className='likes'>
        {info && findLikes().map((item, i) => {
          return <p key={i}> {item.name}</p>
        })}
      </div>
    </div >
  )
}