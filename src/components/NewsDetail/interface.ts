import { ReactNode } from "react";

export interface NewsDetailForm{
    [x: string]: ReactNode;
    email: string;
    des: string;
}