import { AbstractSchema } from "../../services/database";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";
import { Field, ObjectType } from "@nestjs/graphql";

@Schema({ versionKey: false })
@ObjectType()
export class UserManagementDocument extends AbstractSchema {

    @Prop({ required: true })
    @Field()
    timestamp!: Date;

    @Prop({ required: true })
    @Field()
    startDate!: Date;

    @Prop({ required: true })
    @Field()
    endDate!: Date;

    @Prop({ required: true })
    @Field()
    userId!: string;


    @Prop({ required: true })
    @Field()
    invoiceId!: string;

    
}

export const UserManagementSchema = SchemaFactory.createForClass(UserManagementDocument);
