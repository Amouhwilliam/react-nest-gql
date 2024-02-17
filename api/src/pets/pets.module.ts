import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Pet} from "./pet.entity";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), UsersModule],
  providers: [PetsService, PetsResolver]
})
export class PetsModule {}
