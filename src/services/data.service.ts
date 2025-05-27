import { Data } from "../generated/prisma";
// import { Author } from "../types/generalTypes";
import prisma from "../utils/prisma.server";

//get toda la data
const getData = async (): Promise<Data[]> => {
    return prisma.data.findMany({});
};

export default {
    getData,
};
