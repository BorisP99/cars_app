// fajl za tipove // 

import { MouseEventHandler } from "react";

export interface CustomButtonProps { // tipovi koje funkcija klik na dugme moze da ima i prosledjujemo ih kao props za komponentu CustomButton // 
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface searchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void; // funkcija koja uzima manufacturer kao string i ne vraca nista //
}