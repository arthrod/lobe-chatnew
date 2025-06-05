import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const adminEnv = createEnv({
  runtimeEnv: {
    ADMIN_SECRET: process.env.ADMIN_SECRET,
  },
  server: {
    ADMIN_SECRET: z.string().optional(),
  },
});
