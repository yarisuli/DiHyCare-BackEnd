import user from '../services/user.service';
import { DataType, Prisma } from '../generated/prisma/client';
import { EntryUpload } from '../types/generalTypes';
import prisma from '../utils/prisma';

const createEntries = async (
  userId: number,
  entries: EntryUpload[]
): Promise<Prisma.BatchPayload> => {
  const normalizedEntries = Array.isArray(entries) ? entries : [entries];
  const entryArray = normalizedEntries.map((entry, idx) => {
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
      noise
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

    return {
      // device: device,
      dataType: DataType.GLUCOSE,
      createdAt: new Date(dateString),
      //    mbg: mbg,
      value: sgv,
      userId: userId
      // delta: delta,
      // direction: direction,
      // filtered: filtered,
      // unfiltered: unfiltered,
      // rssi: rssi,
      // noise: noise,
    };
  });
  return prisma.data.createMany({
    data: entryArray,
    skipDuplicates: true
  });
};

export default {
  createEntries
};
