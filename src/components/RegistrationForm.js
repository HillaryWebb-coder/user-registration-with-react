import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  website: yup.string().url().required(),
  imagelink: yup.string().url().required(),
  gender: yup.string().required(),
  skills: yup.array().required()
});

export default function RegistrationForm({ submitForm }) {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isSubmitSuccessful }
  } = useForm({
    resolver: yupResolver(schema),
    shouldUseNativeValidation: true
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="sub-section">
      <h3>Register User</h3>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input type="text" {...register("firstname")} />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" {...register("lastname")} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" {...register("email")} />
        </div>

        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="text" {...register("website")} />
        </div>

        <div className="form-group">
          <label htmlFor="imagelink">Imagelink</label>
          <input type="text" {...register("imagelink")} />
        </div>

        <div className="form-group">
          Gender:
          <div>
            <label htmlFor="gender">Male</label>
            <input type="radio" {...register("gender")} value="male" />
            <label htmlFor="gender">Female</label>
            <input type="radio" {...register("gender")} value="female" />
          </div>
        </div>

        <div className="form-group">
          Skills:
          <div>
            <label htmlFor="skills">HTML</label>
            <input type="checkbox" {...register("skills")} value="html" />
            <label htmlFor="skills">Java</label>
            <input type="checkbox" {...register("skills")} value="java" />
            <label htmlFor="skills">CSS</label>
            <input type="checkbox" {...register("skills")} value="css" />
          </div>
        </div>

        <div className="form-group btns">
          <input type="submit" value="Enroll Student" />
          <input type="reset" value="Clear" />
        </div>
      </form>
    </div>
  );
}
