import axios from "axios";

const register = (user) => {
  const data = {
    email: user.email,
    password: user.password,
    phone: user.phone,
  };

//  let config = {
//    headers: {
//      'Content-Type': 'null'
//    }
//  }

  axios
    .post(
      "http://localhost:4000/app/signup",
      data,)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default register;