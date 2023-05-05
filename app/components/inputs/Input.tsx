"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface Props {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const Input = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}: Props) => {
  return (
    <div className="relative w-full">
      {formatPrice && (
        <BiDollar
          size={24}
          className="absolute text-neutral-700 top-5 left-2x"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`${formatPrice ? "pl-9" : "pl-4"} ${
          errors[id]
            ? "border-rose-500 focus:border-rose-500"
            : "border-neutral-300 focus:border-black"
        } peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition-all disabled:opacity-70 disabled:cursor-not-allowed`}
      />
      <label
        className={`${formatPrice ? "left-9" : "left-4"} ${
          errors[id] ? "text-rose-500" : "text-zinc-400"
        } absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
