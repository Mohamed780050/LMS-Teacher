import { ReactNode } from "react";

export interface NavBarLinksType {
  icon: ReactNode;
  label: string;
  link: string;
}
export interface loginInputs {
  name: "password" | "identfire";
  placeholder: string;
  type: string;
}
export interface SignUpInputsType {
  name: "password" | "username" | "email" | "confirmPassword";
  placeholder: string;
  type: string;
}
export interface CourseInfo {
  _id: string;
  courseName: string;
  Description: string;
  ImageURL: string;
  price: number;
  IsPublished: boolean;
  Date: {
    normal: string;
    full: string;
  };
  catagory: string;
  AuthorId: string;
  completed: number;
  total: 5;
  Attachments: {
    filename: string;
    link: string;
  }[];
}
export interface unsplashObject {
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
}
