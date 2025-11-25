import { PrismaClient } from '@prisma/client';

declare global {
  // Evita múltiples instancias en desarrollo
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ??
  new PrismaClient({
    adapter: "postgresql",
  });

// En desarrollo guardamos la instancia globalmente
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
