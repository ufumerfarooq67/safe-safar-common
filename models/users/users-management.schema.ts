import { AbstractSchema } from "../../services/database";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";


@Schema({ versionKey: false })
export class UserManagementDocument extends AbstractSchema {

    @Prop({ required: true })
    timestamp!: Date;

    @Prop({ required: true })
    startDate!: Date;

    @Prop({ required: true })
    endDate!: Date;

    @Prop({ required: true })
    userId!: string;


    @Prop({ required: true })
    invoiceId!: string;

    
}

export const UserManagementSchema = SchemaFactory.createForClass(UserManagementDocument);
