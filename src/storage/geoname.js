import { geoname } from "../models";

const cityCodes = [
  "PPL",
  "PPLA",
  "PPLA2",
  "PPLA3",
  "PPLA4",
  "PPLA5",
  "PPLC",
  "PPLCH",
  "PPLF",
  "PPLG",
  "PPLH",
  "PPLL",
  "PPLQ",
  "PPLR",
  "PPLS",
  "PPLW",
  "PPLX",
  "STLMT"
];

export const get = async ({ countryId }) => {
  return await geoname.findAll({
    where: {
      country: countryId,
      fcode: cityCodes
    },
    order: [["population", "DESC"]]
  });
};
