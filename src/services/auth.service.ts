const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import prisma from '../utils/prisma.server';
import { User } from '../generated/prisma';

const register = async (email: string, password: string): Promise<User> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: hashedPassword
    }
  });
};

const login = async (email: string, password: string): Promise<string> => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
    return token;
  };

export default {
  register,
  login
};
