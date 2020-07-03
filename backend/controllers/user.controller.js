const User = require('../model/userModel');

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

module.exports = {
  newUser,
};
