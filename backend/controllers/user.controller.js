const User = require('../model/userModel');
const getToken = require('../middleware/auth');

//for new user
const newUser = async (req, res) => {
  try {
    const user = new User({
      name: 'yogi',
      email: 'yogi@gmail.com',
      password: '1234',
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
};

// for user signIn
const loginCtrl = async (req, res) => {
  const signInUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signInUser) {
    res.send({
      _id: signInUser.id,
      name: signInUser.name,
      email: signInUser.email,
      isAdmin: signInUser.isAdmin,
      token: getToken(signInUser),
    });
  } else {
    res.status(401).send({ msg: 'Invalid Email or Password.' });
  }
};

module.exports = {
  newUser,
  loginCtrl,
};
