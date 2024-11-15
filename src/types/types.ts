export interface SignUpData {
  email: string;
  password: string;
  firstName?: string;  
  name?:string;
  address: string;
  birth_date: string;
  surname: string;
  confirmPassword: string;
  phone:string
}

export interface SignInData {
  email: string;
  password: string;
  rememberMe?:boolean
}
