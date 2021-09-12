import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ResourcesController } from './resources/resources.controller';
import { AppService } from './app.service';
import { ResourcesService } from './resources/resources.service';
import { FirebaseAuthStrategy } from './firebase/firebase-auth.strategy';
import { AuthService } from "./auth/auth.service";

@Module({
  imports: [],
  controllers: [AppController, ResourcesController],
  providers: [AppService, ResourcesService, FirebaseAuthStrategy, AuthService ],
})
export class AppModule {}
