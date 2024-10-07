import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@Schema()
@ObjectType({ isAbstract: true })
export abstract class AbstractSchema {
    @Prop({ type: SchemaTypes.ObjectId })
    @Field(() => String)
    _id!: Types.ObjectId;
}