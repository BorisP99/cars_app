// fajl za tipove // 

import { MouseEventHandler } from "react";

export interface CustomButtonProps { // tipovi koje funkcija klik na dugme moze da ima i prosledjujemo ih kao props za komponentu CustomButton // 
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void; // funkcija koja uzima manufacturer kao string i ne vraca nista //
}

export interface CarProps { // podaci za car //
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {  // podaci za search bar, url //
    manufacturer?: string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
}

export interface OptionProps { // za search po gorivu i godini proizvodnje //
    title: string;
    value: string;
}

export interface CustomFilterProps { // za search po gorivu i godini proizvodnje //
    title: string;
    options: OptionProps[];
    setFilter: any;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: any;
}