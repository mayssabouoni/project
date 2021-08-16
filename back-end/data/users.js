import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mehdi khediri',
    email: 'mehdi@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mayssa bouoni',
    email: 'mayssa@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Akel hosni',
    email: 'akel@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
