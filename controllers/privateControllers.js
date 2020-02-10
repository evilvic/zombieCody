const User = require('../models/User')

exports.dashboardView = (req, res) => {
  res.render('private/dashboard', req.user)
}

exports.settingsView = (req, res) => {
  res.render('private/settings', req.user)
}

exports.update = async (req, res) => {
  const { profilepic } = req.body
  const { _id } = req.user
  const user = await User.findOne({ _id })

  switch(profilepic) {
    case 'zombi':
      user.photoUrl = 'https://res.cloudinary.com/evilvic/image/upload/v1581298347/zombiCody/profile/zombi_qql1bo.png'
      break;
    case 'boy':
      user.photoUrl = 'https://res.cloudinary.com/evilvic/image/upload/v1581298343/zombiCody/profile/boy_kw9ton.png'
      break;
    case 'girl':
      user.photoUrl = 'https://res.cloudinary.com/evilvic/image/upload/v1581298343/zombiCody/profile/girl_yz1oli.png'
      break;
    case 'brain':
      user.photoUrl = 'https://res.cloudinary.com/evilvic/image/upload/v1581298343/zombiCody/profile/brain_nkm6gm.png'
      break;
    case 'hand':
      user.photoUrl = 'https://res.cloudinary.com/evilvic/image/upload/v1581298343/zombiCody/profile/hand_ggu5hz.png'
      break;
  }

  await user.save()
  res.redirect('/private/dashboard')
}
