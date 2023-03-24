import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOneUser(userId: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async findOneUserByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(payload: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: payload });
  }
}
