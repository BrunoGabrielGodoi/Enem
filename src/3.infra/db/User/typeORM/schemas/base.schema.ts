import { EntitySchemaColumnOptions, EntitySchemaOptions } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings.js";

export const baseSchema = {
  id: {
    primary: true,
    unique: true,
    generated: true,
  } as EntitySchemaColumnOptions,
  created_at: {
    type: Date,
    createDate: true,
  } as EntitySchemaColumnOptions,
  deleted_at: {
    type: Date,
    nullable: true,
    deleteDate: true,
  } as EntitySchemaColumnOptions,
  updated_at: {
    type: Date,
    updateDate: true,
  } as EntitySchemaColumnOptions,
};
