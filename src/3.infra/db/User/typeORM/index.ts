import { DataSource } from "typeorm";
import { User } from "../../../../1.domain/User/user.entity";
import { UserSchema } from "./schemas/user.schema";

export const dataSource = async () => {
  return await new DataSource({
    type: "sqlite",
    entities: [UserSchema],
    database: "enemWebApp",
    synchronize: true,
    extra: {
      connectionLimit: 10,
      max: 20,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }).initialize();
  // return await new DataSource({
  //   type: 'sqlite' "mysql",
  //   ssl: true,
  //
  //   entities: [UserSchema],
  //   synchronize: true,
  //   extra: {
  //     connectionLimit: 10,
  //     max: 20,
  //     ssl: {
  //       rejectUnauthorized: false,
  //     },
  //   },
  // }).initialize();
};

// export default async () => {
//   const metricsV2MasterDs = new DataSource(metricsV2MasterOptions());
//   const metricsV2ReadReplicaDs = new DataSource(metricsV2ReadReplicaOptions());

//   try {
//     await metricsV2MasterDs.initialize();
//     await metricsV2ReadReplicaDs.initialize();
//     logger.info("Databases connected");
//   } catch (error: any) {
//     logger.error("Error connecting databases");
//     logger.error(error);
//     throw new Error(error.message);
//   }
// };
