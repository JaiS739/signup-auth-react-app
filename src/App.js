import { useState } from "react";
import { FormInputs } from "./components/FormInputs";
import "./styles.css";

export default function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "user name",
      errorMessage:
        "should be between 3-10 characters, don't use special characters",
      label: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "enter valid email address",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",

      label: "birthday"
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "password",
      errorMessage:
        "pasword should be 8-20 characters one Capital letter and one special characters",
      label: "password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "confirm password",
      errorMessage: "password didn't match",
      label: "confirm password",
      pattern: values.password,
      required: true
    }
  ];

  const hanleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="App">
        <div>
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={hanleSubmit}>
          {inputs.map((ele) => (
            <FormInputs
              key={ele.id}
              {...ele}
              value={values[inputs.name]}
              onChange={onChange}
            />
          ))}

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
