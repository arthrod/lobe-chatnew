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
  const body = await req.json();
  if (!body.userId || typeof body.userId !== 'string') {
    return NextResponse.json({ error: 'Invalid userId' }, { status: 400 });
  }
  if (!body.preference || typeof body.preference !== 'object') {
    return NextResponse.json({ error: 'Invalid preference' }, { status: 400 });
  }
  const { userId, preference } = body;
  const service = new AdminService();
  await service.updateUserPreference(userId, preference);
  return NextResponse.json({ success: true });
};
