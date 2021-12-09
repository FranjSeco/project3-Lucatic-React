import React from 'react';
import { Card } from '../cards/cards';
import Api from '../../utils/api.js';
import { Navbar } from '../nav/navbar.js'
import { Likes } from '../likes/likes.js';
import './main.css';
import { Dislikes } from '../dislikes/dislike';

export const Main = () => {
  const [perfiles, setPerfiles] = React.useState([]);
  const [infoRaw, setInfoRaw] = React.useState([]);
  const [info, setInfo] = React.useState(false);
  const currentUserID = localStorage.getItem('id');

  const api = new Api({
    baseUrl: 'http://localhost:8080/api',
    headers: {
      'content-type': 'application/json'
    }
  })



  const getUsers = async () => {
    await api.getAllUsers()
      .then(data => {
        setInfoRaw(data);
        const dislikesLista = data.find((item) => {
          return item._id === currentUserID;
        }).dislikeDado;

        // console.log(dislikesLista, 'dislikes');

        const likesLista = data.find((item) => {
          return item._id === currentUserID;
        }).likesDado;

        let notShowList = dislikesLista.concat(likesLista);


        notShowList.push(currentUserID);
        // console.log(notShowList)
        const arrayFiltered = data.filter(({ _id }) => {
          return !notShowList.includes(_id);
        })


        // console.log(arrayFiltered);
        setPerfiles(arrayFiltered);
        setInfo(true);
      })
  };

  const getRandom = () => {
    let random = Math.floor(Math.random() * 19);
    // console.log(random);
    return random;
  }

  React.useEffect(() => {
    getUsers();
  }, [])


  return (
    <div className='main'>
      <Navbar />
      {
        info && <Card perfiles={perfiles[getRandom()]} />
      }

      <div className='main__content-container'>
        {info && <Likes info={info} infoRaw={infoRaw} />}
        <span className='main__separator'></span>
        {info && <Dislikes info={info} infoRaw={infoRaw} />}
      </div>

    </div>
  );
}