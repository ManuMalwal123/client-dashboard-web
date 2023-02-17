import { Fragment, useRef } from "react";

// Custom Container
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "@common/styled/index";

const LoginPage = () => {
  const formRef = useRef({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    formRef.current[e.target.name] = e.target.value;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);
  };

  return (
    <Fragment>
      <Container
        height={"100vh"}
        bgColor={'#f4f4f4'}
        style={{ display: "grid", placeItems: "center" }}
      >
        <Form
          className="border p-5"
          display="grid"
          boxShadow
          style={{ minWidth: 300 }}
          onSubmit={onFormSubmit}
        >
          <h1 className="mb-2 text-center">Login</h1>
          <FormGroup>
            <Label required>Username Or Email</Label>
            <Input
              type={"email"}
              name="email"
              onChange={onChange}
              className="w-full"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label required>Password</Label>
            <Input
              type={"password"}
              name="password"
              onChange={onChange}
              className="w-full"
              required
            />
          </FormGroup>
          <Button type="submit">Login</Button>

          <small className="text-muted">
            <span style={{ color: "red" }}>*</span> Please enter your
            cradentials.
          </small>
        </Form>
      </Container>
    </Fragment>
  );
};

export default LoginPage;
