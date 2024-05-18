import React from "react";

const rows3 = [
  {
    expresso: "Espresso",
    meidum: 1.85,
    large: 2.65,
  },
  {
    expresso: "Mocchiato",
    meidum: 2.65,
    large: 3.4,
  },
  {
    expresso: "Con panna ",
    meidum: 2.85,
    large: 3.85,
  },
  {
    expresso: "Cafe latte",
    meidum: 1.85,
    large: 2.23,
  },
  {
    expresso: "Cappucino",
    meidum: 1.85,
    large: 2.23,
  },
  {
    expresso: "Classic Cappucino",
    meidum: 1.85,
    large: 2.23,
  },
  {
    expresso: "Mocha latte",
    meidum: 1.75,
    large: 2.25,
  },
  {
    expresso: "Caramel late",
    meidum: 1.85,
    large: 2.23,
  },
  {
    expresso: "Vanilla late ",
    meidum: 1.85,
    large: 2.23,
  },
  {
    expresso: "Cafe miel",
    meidum: 1.85,
    large: 2.23,
  },
  {
    expresso: "Cafe americano",
    meidum: 1.85,
    large: 2.23,
  },
  {
    expresso: "Cafe miel",
    meidum: 1.85,
    large: 2.23,
  },
  {
    expresso: "Fruit smoothie",
    meidum: 1.85,
    large: 2.23,
  },
];

const rows2 = [
  {
    expresso: "Hot tea",
    meidum: 1.85,
    large: 2.65,
  },
  {
    expresso: "Lecd tea",
    meidum: 2.65,
    large: 3.4,
  },
  {
    expresso: "Steamer ",
    meidum: 2.85,
    large: 3.85,
  },

  {
    expresso: "Hot chocolate",
    meidum: 1.11,
    large: 2.22,
  },
  {
    expresso: "Lemonade",
    meidum: 1.33,
    large: 2.43,
  },
  {
    expresso: "Fruit smoothie",
    meidum: 1.55,
    large: 2.78,
  },
];
const rows1 = [
  {
    expresso: "Brewed coffee",
    meidum: 1.85,
    large: 2.65,
  },
  {
    expresso: "Cafe au lait",
    meidum: 2.65,
    large: 3.4,
  },
  {
    expresso: "French press",
    meidum: 2.85,
    large: 3.85,
  },

  {
    expresso: "Iced coffee",
    meidum: 2.21,
    large: 3.23,
  },
];

const FdTable = () => {
  return (
    <>
      <div className="mx-auto text-center my-8 md:w-4/12 mt-10">
        <p className="greatVibes text-[#CA8E46] text-6xl font-bold ">
          Favorite
        </p>
        <h3 className="text-white font-bold text-4xl uppercase">Drinks</h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 lg:px-20 px-5 pt-5">
        <div>
          <table className="min-w-full mb-10">
            <thead>
              <tr className="mb-10">
                <th className="text-start text-start text-2xl font-bold text-white">
                  <span className="text-[#CA8E46]">COFFEE --- </span>
                </th>
                <th className="text-start text-xl font-bold text-white">
                  Medium
                </th>
                <th className="text-start text-xl font-bold text-white">
                  Large
                </th>
              </tr>
            </thead>
            <tbody>
              {rows1.map((element) => {
                return (
                  <tr className=" mb-5">
                    <td className="text-xl font-bold text-white ">
                      {element.expresso}
                    </td>
                    <td className="text-xl font-bold text-white">
                      <span className="text-[#CA8E46]">$</span>
                      {element.meidum}
                    </td>
                    <td className="text-xl font-bold text-white">
                      {" "}
                      <span className="text-[#CA8E46]">$</span>
                      {element.large}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="min-w-full">
            <thead>
              <tr className="mb-10">
                <th className="text-start text-2xl font-bold text-white">
                  <span className="text-[#CA8E46]">NON COFFEE--- </span>
                </th>
                <th className="text-start text-xl font-bold text-white">
                  Medium
                </th>
                <th className="text-start text-xl font-bold text-white">
                  Large
                </th>
              </tr>
            </thead>
            <tbody>
              {rows2.map((element) => {
                return (
                  <tr className=" mb-5">
                    <td className="text-xl font-bold text-white ">
                      {element.expresso}
                    </td>

                    <td className="text-xl font-bold text-white">
                      <span className="text-[#CA8E46]">$</span>
                      {element.meidum}
                    </td>
                    <td className="text-xl font-bold text-white">
                      {" "}
                      <span className="text-[#CA8E46]">$</span>
                      {element.large}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <table className="min-w-full">
          <thead>
            <tr className="mb-10">
              <th className="text-start text-2xl font-bold text-white">
                <span className="text-[#CA8E46]">ESPRESSO --- </span>
              </th>
              <th className="text-start text-xl font-bold text-white">
                Medium
              </th>
              <th className="text-start text-xl font-bold text-white">Large</th>
            </tr>
          </thead>
          <tbody>
            {rows3.map((elem) => {
              return (
                <tr className="mb-5">
                  <td className="text-xl font-bold text-white ">
                    {elem.expresso}
                  </td>

                  <td className="text-xl font-bold text-white">
                    <span className="text-[#CA8E46]">$</span>
                    {elem.meidum}
                  </td>
                  <td className="text-xl font-bold text-white">
                    {" "}
                    <span className="text-[#CA8E46]">$</span>
                    {elem.large}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FdTable;
