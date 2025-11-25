// import { PrismaClient } from './generated/prisma';


// const prisma =
//   global.prisma ??
//   new PrismaClient();

// // En desarrollo guardamos la instancia globalmente

import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;