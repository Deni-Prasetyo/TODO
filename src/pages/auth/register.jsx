import { React } from "react";
import { Button, Container, FormFeedback, Input } from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().min(8).required(),
  retypePassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = ({ setCurrentContainer }) => {
  const handleRegister = async (e) => {
    const { email, password, username } = formik.values;
    let { data } = await axios.post(`http://localhost:3002/data`, { email, password, username });
    setCurrentContainer(true);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      address: "",
      phone_number: "",
      password: "",
      retypePassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => handleRegister(),
  });

  return (
    <Container className="container-register">
      <form onSubmit={formik.handleSubmit}>
        {Object.keys(formik.initialValues).map((key, index) => (
          <div key={index} className="row-input">
            <Input Id={key} name={key} placeholder={key} value={formik.values[key]} onChange={formik.handleChange} invalid={formik.touched[key] && Boolean(formik.errors[key])} />

            {formik.touched[key] && Boolean(formik.errors[key]) && <FormFeedback className="error-feedback">{formik.errors[key]}</FormFeedback>}
          </div>
        ))}
        <Button className="btn-submit" type="submit">
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
