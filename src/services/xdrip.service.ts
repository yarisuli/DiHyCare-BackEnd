import user from "../services/user.service";
import { DataType, Prisma } from "../generated/prisma/client";
import { EntryUpload } from "../types/generalTypes";
import prisma from "../utils/prisma.server";

const createEntries = async (
  entries: EntryUpload[],
): Promise<Prisma.BatchPayload> => {
  const entryArray = await Promise.all(entries.map(async (entry, idx) => {
    const {
      device,
      type,
      dateString,
      mbg,
      sgv,
      delta,
      direction,
      filtered,
      unfiltered,
      rssi,
      noise,
    } = entry;

    // return {
    //   device: device,
    //   type: type,
    //   date: new Date(dateString),
    //   mbg: mbg,
    //   sgv: sgv,
    //   delta: delta,
    //   direction: direction,
    //   filtered: filtered,
    //   unfiltered: unfiltered,
    //   rssi: rssi,
    //   noise: noise,
    // };

  
    // You need to pass 'token' as a parameter to this function or get it from context
     const token = "3f509aca-4521-42f7-b621-7ad59db58cd1";
    const userObj = await user.getUserByToken(token);
    

      return {
      // device: device,
      dataType: DataType.GLUCOSE,
      createAt: new Date(dateString),
  //    mbg: mbg,
      value: sgv,
      userId: userObj?.id?? 56, // Assuming userObj has an id property
      // delta: delta,
      // direction: direction,
      // filtered: filtered,
      // unfiltered: unfiltered,
      // rssi: rssi,
      // noise: noise,
    };

  }));
  return prisma.data.createMany({
    data: entryArray,
    skipDuplicates: true,
  });
};

export default {
  createEntries,
};
