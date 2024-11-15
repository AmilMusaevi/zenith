import { useMutation } from "@tanstack/react-query";
import { registerUser, signInUser } from "./auth.service";
import { SignInData, SignUpData } from "../../types/types";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data: SignUpData) => {
      return registerUser(data);
    },
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (data: SignInData) => {
      return signInUser(data);
    },
  });
};
