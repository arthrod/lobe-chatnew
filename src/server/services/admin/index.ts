
import { UserModel } from '@/database/models/user';
import { users } from '@/database/schemas';
import { serverDB } from '@/database/server';

export class AdminService {
  listUsers = async () => {
    return serverDB
      .select({ email: users.email, id: users.id, preference: users.preference })
      .from(users)
      .limit(100);
  };

  updateUserPreference = async (userId: string, preference: any) => {
    const userModel = new UserModel(serverDB, userId);
    await userModel.updatePreference(preference);
  };
}
