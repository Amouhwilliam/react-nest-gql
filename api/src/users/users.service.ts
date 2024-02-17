import {Injectable} from '@nestjs/common';
import {CreateUserInput} from './dto/create-user.input';
import {UpdateUserInput} from './dto/update-user.input';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser: User =  this.usersRepository.create(createUserInput)
    return this.usersRepository.save(newUser);
  }

  findAll():Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneByOrFail({id});
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.usersRepository.findOneByOrFail({id});
    user.name = updateUserInput.name;
    return await this.usersRepository.save(user)
  }

  async remove(id: number) {
    if(id){
      //const user: User = await this.usersRepository.findOneByOrFail({id});
      return await this.usersRepository.delete({id});
    } else {
      return
    }

  }
}
