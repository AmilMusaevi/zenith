import { useMutation } from "@tanstack/react-query";
import { registerUser } from "./auth.service";
import { SignUpData } from "../../types/types";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data: SignUpData) => {
      return registerUser(data);
    },
  });
};
