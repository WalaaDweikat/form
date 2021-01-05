import "./after.css";
import sub1 from "../../imgs/sub1.png";
import sub2 from "../../imgs/sub2.png";
import twitter from "../../imgs/twitter.png";
import linkedin from "../../imgs/linkedin.png";
import github from "../../imgs/github.png";
import google from "../../imgs/google.png";
import Icon from "../../components/I/index.js";
import Input from "../../components/Input/index.js";
import q2 from "../../imgs/q2.png";
import superscene from "../../imgs/superscene.png";
import v from "../../imgs/v.png";
import iv from "../../imgs/iv.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button/index.js";
import { useState } from "react";
import * as yup from "yup";
const signupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
const initErrors = {
  email: "",
  password: "",
};

export default function SignUpAfter() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [flag1, setFlag] = useState("hide");
  const [flag2, setFlag2] = useState("eye");
  const [type, setType] = useState("password");
  const newAccount = { email, password };
  const handle = () => {
    if (flag1 === "hide" && flag2 === "eye") {
      setFlag("eye");
      setFlag2("hide");
      setType("text");
    }

    if (flag1 === "eye" && flag2 === "hide") {
      setFlag("hide");
      setFlag2("eye");
      setType("password");
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    signupSchema
      .validate(newAccount, { abortEarly: false })
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
        setError(newError);
      });
  };

  return (
    <div className="after">
      <aside className="side">
        <img src={sub1} alt="" className="sub2" />
        <img src={sub2} alt="" className="sub1" />

        <p className="gamersAfter">Gamers</p>
        <img src={q2} alt="" className="q2" />
        <p className="aferComment">
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
        <p className="afterWriter">Hideo Kojima</p>
        <img src={superscene} alt="" className="superscene" />
      </aside>
      <main className="mainA">
        <div className="At">
          <h1>
            <strong>Join the game!</strong>
          </h1>
          <p className="go">Go inside the best gamers social network!</p>
        </div>
        <div className="icons">
          <Icon icon={google} />
          <Icon icon={twitter} />
          <Icon icon={linkedin} />
          <Icon icon={github} />
        </div>
        <pre className="or">
          _______________________ Or _______________________
        </pre>
        <div className="login">
          <Input
            type="email"
            id="n"
            name="Your email"
            placeholder="Write your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="log">{error.email}</label>
          <Input
            type={type}
            id="p"
            name="Enter your password"
            placeholder="•••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label className="log">{error.password}</label>

          <img src={v} alt="" className={flag2} onClick={handle} />
          <img src={iv} alt="" className={flag1} onClick={handle} />
          <Button color="blue" name="Login" onClick={handleRegister} />
          <p className="new">
            Don’t have an account?
            <Link to="/SignUpBefore">
              <span>Register</span>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
