import axios from "axios";

const login = (user, setUserAccount, setRedirect) => {
  axios
    .post("http://localhost:4000/app/signup", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      console.log("res from login", res);
    //  setUserAccount(res);
    //  setRedirect(true);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default login;