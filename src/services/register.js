import axios from "axios";

const register = (user) => {
  const data = {
    email: user.email,
    phone: user.phone,
  };

  axios
    .post(
      "https://carbon-lo.herokuapp.com/add-subscriber",
      data,)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default register;