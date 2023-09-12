"use client";
import React, { useContext, useEffect } from "react";
import "./SignUp.css";
import signUpSvg from "./Sign up-cuate.png";
import signUpArrow from "./dbl-arrow.png";
import { useForm } from "react-hook-form";
import { Authcontext } from "@/components/Provider/AuthProvider";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const { createUser, updateUserProfile } = useContext(Authcontext);

  useEffect(() => {
    // Additional code if needed
  }, []);

  const handleSignUp = handleSubmit((data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const photoURL = data.photoURL;

    if (password.length < 6) {
      setError("password", {
        message: "Password should be at least 6 characters long",
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("password", {
        message: "Password should contain at least one capital letter",
      });
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      setError("password", {
        message: "Password should contain at least one special character",
      });
      return;
    }

    if (password !== confirmPassword) {
      setError("confirmPassword", { message: "Passwords do not match" });
      return;
    }

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(name, photoURL)
        .then(() => {
          const saveUser = { name: loggedUser.name, email: loggedUser.email };
          fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setError("email", { message: "Email already in use" });
          } else {
            console.log(error);
          }
        });
    });
  });
  return (
    <div className="root">
      <main className="card-container slideUp-animation">
        <div className="image-container">
          <Image src={signUpSvg} className="illustration" alt="" />
          <a href="#btm" className="mobile-btm-nav">
            <Image src={signUpArrow} alt="" />
          </a>
        </div>
        <form className="signUpForm" onSubmit={handleSignUp}>
          <div className="form-containers slideRight-animation">
            <h1 className="form-header">Get started</h1>
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                className="inputs"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="error">Name is required</p>}
            </div>
            <div className="input-container">
              <label htmlFor="mail">E-mail</label>
              <input
                className="inputs"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="error">{errors.email.message}Email is required</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="user-password">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="user-password inputs"
              />
              {errors.password && (
                <p className="error">
                  {errors.password.message}Password is required
                </p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                className="user-password inputs"
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword.message}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="PhotoURL">PhotoURL</label>
              <input
                type="text"
                className="inputs"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && <p className="error">PhotoURL is required</p>}
            </div>
            <div id="btm">
              <input
                type="submit"
                value="Create Account"
                className="submit-btn"
              />
              <p className="btm-text">
                Already have an account..?{" "}
                <Link href="/Login" className="btm-text-highlighted">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUpPage;
