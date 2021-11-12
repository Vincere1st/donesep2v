import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {DatabaseModule} from './core/database/database.module'
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "./modules/user.module";
import {databaseService} from "./core/database/database.service";
import {ConfigModule} from "@nestjs/config";
import {createConnection} from "typeorm";
import {config} from "./core/database/ormconfig";
import {databaseProviders} from "./core/database/database.providers";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env.dev']}),
        // TypeOrmModule.forRoot(databaseService.getTypeOrmConfig()),
        DatabaseModule,
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
