import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import useInput from "../../hooks/use-input";
import Button from "@material-ui/core/Button";

import * as Validators from "../../helpers/validators";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";
import Loader from "react-loader-spinner";
import { Alert } from "bootstrap";

import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#1d9a6c",
    fontSize: 14,
    fontFamily: "Jost",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    // $disabled is a reference to the local disabled
    // rule within the same style sheet.
    // By using &, we increase the specificity.
    "&:hover": {
      backgroundColor: "#1d9a6c",
    },
    "&$disabled": {
      background: "rgba(0, 0, 0, 0.12)",
      color: "white",
      boxShadow: "none",
    },
  },
  disabled: {},
}));

export default function LoginForm(props) {
  const classes = useStyles();
  const history = useHistory();

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const [isOTPPage, setOTPPage] = useState(false);
  const [OTP, setOTP] = useState("");

  // useEffect(() => {
  //     if (error) {
  //         // alert(error);
  //
  //     }
  // }, [error]);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput("", Validators.isEmail);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput("", Validators.isNotEmpty);

  let formIsValid = false;
  if (passwordIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitForm = async () => {
    setIsLoading(true);
    try {
      await dispatch(authActions.tryLogin(email, password));
      setError(null);
      setIsLoading(false);
      setOTPPage(true);

      // history.replace(`${process.env.PUBLIC_URL}/user`);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const OTPChangeHandler = (e) => {
    setOTP(e.target.value);
  };

  const submitOTP = async () => {
    setIsLoading(true);

    try {
      await dispatch(authActions.submitOTP(OTP));
      setError(null);
      history.replace(`${process.env.PUBLIC_URL}/admin/users`);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const closeFormHandler = () => {
    resetEmail();
    resetPassword();
    setOTPPage(false);
    setOTP("");
    props.handleClose();
    setError(null);
  };
  return (
    <Container component="main" maxWidth="xs">
      {/*<Button variant="contained" color="secondary" onClick={handleOpen}>*/}
      {/*  Open Animated Modal*/}
      {/*</Button>*/}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={closeFormHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className="pricing-box" style={{ width: 400 }}>
            <form>
              <div align="middle">
                <h2 className="">Sign In</h2>
                <h5
                  style={{
                    fontSize: "10px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    marginTop: "-10px",
                    animation: "typing 2s steps(30, end) ",
                    color: "green",
                  }}
                >
                  Welcome Back to Smart Pet feeder !
                </h5>
              </div>

              <span style={{ color: "#808080", fontSize: "12px" }}>
                {" "}
                SignIn using{" "}
              </span>
              <div class="social-iconss">
                <div className="social-icons">
                  <a href="#" className="icon">
                    <FaFacebook style={{ color: "#4267B2" }} />
                  </a>
                  <a href="#" className="icon">
                    <FaInstagram style={{ color: "#E4405F" }} />
                  </a>
                  <a href="#" className="icon">
                    <FaLinkedin style={{ color: "#0077B5" }} />
                  </a>
                  <a href="#" className="icon">
                    <FaGoogle style={{ color: "#DB4437" }} />
                  </a>
                </div>
                <span style={{ color: "#808080", fontSize: "12px" }}>
                  {" "}
                  <br />
                  or use your email & password
                </span>
              </div>
              <div className="inputdiv">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    className="form-control invalid"
                    required="required"
                  />
                  {emailHasError && (
                    <p className="error-message">Invalid Email</p>
                  )}
                </div>
              </div>

              <div className="inputdiv">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    className="form-control"
                    required="required"
                  />

                  {passwordHasError && (
                    <p className="error-message">Please enter your password</p>
                  )}
                </div>
              </div>
              <a
                href="#"
                style={{
                  color: "gray",
                  fontSize: "12px",
                  display: "block",
                  marginBottom: "10px",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => (e.target.style.color = "red")}
                onMouseOut={(e) => (e.target.style.color = "gray")}
              >
                Forgot Password?
              </a>

              {!isOTPPage && (
                <div className="form-actions">
                  {isLoading ? (
                    <div align="center">
                      <Loader
                        type="ThreeDots"
                        color="green"
                        height={48}
                        width={100}
                      />
                    </div>
                  ) : (
                    <Button
                      classes={{
                        root: classes.button, // class name, e.g. `root-x`
                        disabled: classes.disabled, // class name, e.g. `disabled-x`
                      }}
                      disabled={!formIsValid}
                      onClick={submitForm}
                      sx={{borderRadius:'20px'}}
                    >
                      Login
                    </Button>
                  )}
                </div>
              )}

              {isOTPPage && (
                <React.Fragment>
                  <hr style={{ width: "100%", height: "2px" }} />
                  <div className="inputdiv">
                  <div className="">
                    <input
                      type="input"
                      id="otp"
                      placeholder="Enter OTP"
                      value={OTP}
                      onChange={OTPChangeHandler}
                      className="form-control"
                      required="required"
                    />
                  </div>

                  {isLoading ? (
                    <div align="center">
                      <Loader
                        type="ThreeDots"
                        color="green"
                        height={48}
                        width={100}
                      />
                    </div>
                  ) : (
                    <Button
                      classes={{
                        root: classes.button,
                        disabled: classes.disabled,
                      }}
                      className="button__"
                      // disabled={!formIsValid}
                      onClick={submitOTP}
                    >
                      Submit OTP
                    </Button>
                  )}
                  </div>
                </React.Fragment>
              )}

              {error && <p className="error-message pt-10"> * {error} </p>}
            </form>
          </div>
        </Fade>
      </Modal>
    </Container>
  );
}
