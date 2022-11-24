import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'S' | 'M';
    children: ReactNode;
    color?: 'ghost' | 'gray' | 'green' | 'primary' | 'red';
    href?: string
}