import user from '../models/users.js'
import bcrypt from 'bcryptjs';
let dbData = user;

export const login = (req, res, next) => {
  const { email, password } = req.body;
  console.log(dbData);
  return dbData.findUserByCredentials(email, password)
    .then((user) => {
      console.log(user, 'en login')
      if (!user) {
        throw new NotAuthorized('Not Authorized');
      }
      res.cookie('ID', user._id, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
      });
      return res.send(user);
    })
    .catch(next);
};


export const getAllUsers = (req, res, next) => {
  dbData.find({})
    .then((users) => {
      res.status(200).send(users)
    })
    .catch(next);
}

// likes

export const likeUser = (req, res, next) => {
  dbData.findByIdAndUpdate(req.params._id,
    { $addToSet: { likesDado: req.body.user._id } }, // add _id to the array if it's not there yet
    { new: true })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User not found');
      }
      console.log(user);
    })
    .catch(next);
};

export const dislikeUser = (req, res, next) => {
  dbData.findByIdAndUpdate(req.params.id,
    { $addToSet: { dislikeDado: req.body.user._id } }, // add _id to the array if it's not there yet
    { new: true }
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User not found');
      }
      console.log(user);
    })
    .catch(next);
}