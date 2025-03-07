"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });

      if (response.status === 200) {
        console.log("Письмо успешно отправлено");
        toast.success("Коментар відправлено. Дякуємо за відгук");
        reset();
      } else {
        console.error("Произошла ошибка при отправке письма");
        toast.error("Помилка. Спробуйте пізніше");
      }
    } catch (error) {
      console.error("Произошла ошибка при отправке письма", error);
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[400px] mx-auto rounded-md bg-darkLight p-8"
      >
        <div className="relative flex flex-col mb-4">
          <label htmlFor="name" className="form-label">
            Ім'я та прізвище
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={`${
              errors?.name ? "border-[red]" : "border-transparent"
            } form-input`}
            {...register("name", {
              required: true,
              minLength: 3,
              pattern:
                /^[a-zA-Zа-яА-ЯёЁёЁїЇіІ]+([ -.]?[a-zA-Zа-яА-ЯёЁїЇіІ]+)*$/,
            })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <p className="form-error">Обов'язкове поле</p>
          )}
          {errors.name?.type === "pattern" && (
            <p className="form-error">Введіть коректне ім'я та прізвище</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="form-error">Занадто коротке ім'я та прізвище</p>
          )}
        </div>

        <div className="relative flex flex-col mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`${
              errors?.email ? "border-[red]" : "border-transparent"
            } form-input`}
            {...register("email", {
              required: true,
              pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p className="form-error">Обов'язкове поле</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="form-error">Введіть коректний email</p>
          )}
        </div>

        <div className="relative flex flex-col">
          <label htmlFor="message" className="form-label">
            Залиште відгук
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            rows={4}
            className={`${
              errors?.message ? "border-[red]" : "border-transparent"
            } form-input resize-none`}
            {...register("message", {
              required: true,
              minLength: 5,
            })}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message?.type === "required" && (
            <p className="form-error">Обов'язкове поле</p>
          )}
          {errors.message?.type === "minLength" && (
            <p className="form-error">Введіть більше символів</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary mt-5"
        >
          {isSubmitting ? "Відправляється..." : "Залишити відгук"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
