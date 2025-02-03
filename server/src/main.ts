import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
	const app: INestApplication = await NestFactory.create(AppModule);

	app.enableCors({
		origin: true,
		credentials: true,
	});

	const port = process.env.PORT || 3333;
	await app.listen(port);
}

bootstrap()
	.then(() => console.log('🚀 Server started on port 3333!'))
	.catch((error) => {
		console.error('❌ Server failed to start:', error);
		process.exit(1);
	});
