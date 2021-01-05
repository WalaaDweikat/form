import "./before.css";
import bg from "../../imgs/bg.png";
import Subtract from "../../imgs/Subtract.png";
import Subtract1 from "../../imgs/Subtract1.png";
import q from "../../imgs/q.png";
import back from "../../imgs/back.png";
import Vector from "../../imgs/Vector.png";
import Input from "../../components/Input/index.js";
import Button from "../../components/Button/index.js";
import google from "../../imgs/google.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

const signupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(9).required(),
  repeat: yup.string().required(),
  This: yup.string().required(),
});
const initErrors = {
  email: "",
  password: "",
  repeat: "",
  This: "",
};

export default function SignUpBefore() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [This, setThis] = useState("");
  const [error, setError] = useState({});
  const [flag, setFlag] = useState(false);
  const newAccount = { email, password, repeat, This };
  const v = (a) => {
    signupSchema
      .validate(a, { abortEarly: false })
      .then((valid) => {
        if (valid) {
          console.log("Yes");
        }
      })
      .catch((err) => {
        let newError = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});

        if (password !== repeat && repeat !== "")
          newError = {
            ...newError,
            repeat: "The two passwords are not the same",
          };
        setError(newError);
        console.log(error.password);
      });
  };
  useEffect(() => {
    if (flag) {
      v(newAccount);
    }
  }, [email, password, repeat, This]);
  const handleRegister = (e) => {
    e.preventDefault();
    v(newAccount);
    setError(initErrors);
    setFlag(true);
  };

  return (
    <div className="before">
      <div>
        <div className="bgc"></div>
        <img src={bg} alt="background" className="background" />
      </div>
      <aside className="aside">
        <div className="logo">
          <img src={Subtract} alt="ellipse" className="ellipse" />
          <img src={Subtract1} alt="ellipse1" className="ellipse1" />
          <p>Gamers</p>
        </div>
        <div>
          <img src={q} alt="" className="q" />
          <p className="comment">
            I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them.
          </p>
          <p className="comment writer">Hideo Kojima</p>
          <img src={Vector} alt="" className="vector" />
        </div>
      </aside>

      <div className="main">
        <Link to="/sign">
          <img src={back} alt="back" className="arrow" />{" "}
        </Link>
        <Link to="/sign">
          <p className="back">Back</p>
        </Link>
        <div className="t">
          <h1>Register Individual Account!</h1>
          <p className="for">
            For the purpose of gamers regulation, your details are required.
          </p>
        </div>
        <div className="in">
          <Input
            type="email"
            id="email"
            name="Email address*"
            placeholder="Enter email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="in1">{error.email}</label>
          <Input
            type="password"
            id="pass"
            name="Create password*"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* <div className="we">
            <button className="strong"></button>
            <button className="none"></button>
          </div> */}
          <label className="in1">{error.password}</label>
          <Input
            type="password"
            id="rpass"
            name="Repeat password*"
            placeholder="Repeat password"
            onChange={(e) => {
              setRepeat(e.target.value);
            }}
          />
          <label className="in1">{error.repeat}</label>
          <div className="check">
            <input
              type="checkbox"
              id="check"
              name="I agree to terms and conditions"
              onClick={() => {
                if (This === "on") setThis("");
                else setThis("on");
              }}
            />

            <label htmlFor="check"> I agree to terms and conditions</label>
            <label className="in1">{error.This}</label>
          </div>
          <Button
            color="blue"
            name="Register Account"
            onClick={handleRegister}
          />
          <Link to="/sign">
            <Button
              color="white"
              name="login"
              icon={<img src={google} alt="google" className="icon" />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
