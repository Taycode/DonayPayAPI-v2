import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async loginUser(email: string, password: string) {
    // Fetch user
    const user = await this.userService.findOneUserByEmail(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) return user;
    throw new Error('Invalid credentials');
  }
}
