import {Injectable} from '@nestjs/common';
import {Pet} from "./pet.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreatePetInput} from "./dto/create-pet.input";
import {UsersService} from "../users/users.service";
import {User} from "../users/entities/user.entity";

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private readonly petsRepository: Repository<Pet>,
                private readonly usersService: UsersService) {
    }

    createPet(createPetInput: CreatePetInput): Promise<Pet> {
        const newPet = this.petsRepository.create(createPetInput);
        return this.petsRepository.save(newPet);
    }

    async findAll(): Promise<Pet[]> {
        return this.petsRepository.find();
    }

    findOne(id: number): Promise<Pet> {
        return this.petsRepository.findOneByOrFail({id});
    }

    getOwner(userId: number): Promise<User> {
        return this.usersService.findOne(userId);
    }
}
