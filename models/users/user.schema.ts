
import { AbstractSchema } from "../../services/database";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";


@Schema({ versionKey: false })
export class UserDocument extends AbstractSchema {

    @Prop({ required: true })
    email!: string;

    @Prop({ required: true })
    password!: string;
    
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
