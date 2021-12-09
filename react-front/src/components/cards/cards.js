import React from 'react';
import Api from '../../utils/api.js';
import './cards.css'

export const Card = ({ perfiles }) => {
  const currentUserID = localStorage.getItem('id');
  const api = new Api({
    baseUrl: 'http://localhost:8080/api',
    headers: {
      'content-type': 'application/json'
    }
  })

  const handleLike = () => {
    api.likes(perfiles, currentUserID);
    window.location.reload();
  }
  const handleDislike = () => {
    api.dislikes(perfiles, currentUserID);
    window.location.reload();
  }


  return (
    <div className="content">
      <div className="card">
        <div className="card__image-container">
          <img className="card__image-element" src={perfiles.foto} alt="" />
        </div>
        <div className="card__info-container">
          <h2 className="card__user-name">{perfiles.name}, {perfiles.edad}</h2>
          <button className="but" ><span className="icon-info"><i
            className="fas fa-info-circle"></i></span></button>
        </div>
        <div className="icons" >
          <button onClick={handleLike} className="but-fun">LIKE</button>
          <button onClick={handleDislike} className="but-fun">DISLIKE</button>
        </div >
      </div >

    </div >
  )
};