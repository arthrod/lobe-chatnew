import { NextResponse } from 'next/server';

import { adminEnv } from '@/config/admin';
import { AdminService } from '@/server/services/admin';

const authFailed = () => new NextResponse('Unauthorized', { status: 401 });

const checkAdmin = (req: Request) => {
  const secret = req.headers.get('x-admin-auth');
  return secret && adminEnv.ADMIN_SECRET && secret === adminEnv.ADMIN_SECRET;
};

export const GET = async (req: Request) => {
  if (!checkAdmin(req)) return authFailed();
  const service = new AdminService();
  const users = await service.listUsers();
  return NextResponse.json(users);
};

export const POST = async (req: Request) => {
  if (!checkAdmin(req)) return authFailed();
  const { userId, preference } = await req.json();
  const service = new AdminService();
  await service.updateUserPreference(userId, preference);
  return NextResponse.json({ success: true });
};
