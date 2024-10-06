import { FilterQuery, Model, Types } from "mongoose";
import { AbstractSchema } from "./abstract.schema";
import { NotFoundException } from "@nestjs/common";
import { TCustomLogger } from "../../types";

export abstract class AbstractRepository<T extends AbstractSchema> {
    protected abstract readonly logger: TCustomLogger;
    constructor(protected readonly model: Model<T>) {}

    async create(createEntityDto: Partial<T>): Promise<T> {
        const createdEntity = new this.model({...createEntityDto, _id: new Types.ObjectId()});
        return (await createdEntity.save()).toJSON() as unknown as T;
    }

    async findOne(filter: FilterQuery<T>): Promise<T | null> {
        const entity = await this.model.findOne(filter).lean<T>(true);

        if (!entity) {
            this.logger.warn('Entity not found', { filter });
            throw new NotFoundException('Entity not found');
        }

        return entity;
    }   

    async findOneAndUpdate(filter: FilterQuery<T>, update: Partial<T>): Promise<T | null> {
        const entity = await this.model.findOneAndUpdate(filter, update, { new: true }).lean<T>(true);

        if (!entity) {
            this.logger.warn('Entity not found', { filter });
            throw new NotFoundException('Entity not found');
        }

        return entity;
    }

    async findAll(filter: Partial<T>): Promise<T[]> {
        return this.model.find(filter).lean<T[]>(true);
    }

    async findOneAndDelete(filter: FilterQuery<T>): Promise<T | null> {
        const entity = await this.model.findOneAndDelete(filter).lean<T>(true);

        if (!entity) {
            this.logger.warn('Entity not found', { filter });
            throw new NotFoundException('Entity not found');
        }
        
        return entity;
        
    }
}