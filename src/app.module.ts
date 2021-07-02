import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Key } from './database/key';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot(Key,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
    JogadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
