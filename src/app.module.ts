import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseConfig } from "./db-config";

// kerby, why? typeorm says to add this: https://www.npmjs.com/package/typeorm
// but also some nestjs examples that use typeorm don't have this import so idk
import "reflect-metadata"


@Module({
  // kerby, why won't the datasource load?
  imports: [TypeOrmModule.forRoot(DatabaseConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
