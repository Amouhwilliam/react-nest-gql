import {Query, Resolver, Mutation, Args, Int, Parent, ResolveField} from '@nestjs/graphql';
import {PetsService} from "./pets.service";
import {Pet} from "./pet.entity";
import {CreatePetInput} from "./dto/create-pet.input";
import {User} from "../users/entities/user.entity";

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petsService: PetsService) {
    }

    @Query(returns => Pet)
    getPets(@Args('id', {type: ()=> Int}) id:number): Promise<Pet> {
        return this.petsService.findOne(id);
    }

    @Mutation(returns => Pet)
    createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet>{
        return this.petsService.createPet(createPetInput);
    }

    @ResolveField('owner', returns => User)
    owner(@Parent() pet: Pet): Promise<User> {
        return this.petsService.getOwner(pet.ownerId);
    }

    @Query(returns => [Pet])
    pets(): Promise<Pet[]>{
        return this.petsService.findAll()
    }

}
