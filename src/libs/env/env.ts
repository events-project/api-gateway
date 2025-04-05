import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();
const envSchema = z.object({
  PORT: z.coerce.number(),
});
type Env = z.infer<typeof envSchema>;
const envValues = envSchema.parse(process.env);
export const env = <T extends keyof Env>(key: T): Env[T] => envValues[key];
