import axios from "axios";

const register = (user) => {
  axios
    .post("http://127.0.0.1:3000", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default register;