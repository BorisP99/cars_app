"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react"; // koristimo headless-ui koji smo instalirali kao paket, da bi lakse kreirali search formu i ostale djelove //

import { SearchManufacturerProps } from "@/types";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers // provjeravamo da li imamo nesto ukucano (quary), da bi radili pretragu po Manufactures //
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase() // stavljamo sve u mala slova i mijenjamo space sa praznim stringom (micemo space), kako bi bili sigurni da ce se lako pretrazivati i ako ukucamo velika slova ili space //
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="Car Logo"
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option // ako nema rezultata za pretragu vratice "Create "aaa" " na primjer //
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option // ako ima rezultata pretrage, prikazi ih i stavi odredjene stilove //
                    key={item}
                    className={({ active }) => `
                    relatrive search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    } `}
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
