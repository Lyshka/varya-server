import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PhotoDocumet = Photo & Document

@Schema()
export class Photo {
	@Prop()
	picture: string

	@Prop()
	like: number
}

export const PhotoSchema = SchemaFactory.createForClass(Photo)