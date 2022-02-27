import { ReactNode } from "react";
export default interface coureDInterface{
    [x: string]: ReactNode;
    image: string | undefined;
    course:any
}
