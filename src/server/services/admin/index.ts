
import { UserModel } from '@/database/models/user';
import { users } from '@/database/schemas';
import { serverDB } from '@/database/server';

interface UserPreference {
  // Define the expected structure of user preferences
  [key: string]: unknown;
}

export class AdminService {
  listUsers = async () => {
    return serverDB
      .select({ email: users.email, id: users.id, preference: users.preference })
      .from(users)
      .limit(100);
  };

  updateUserPreference = async (
    userId: string,
    preference: UserPreference
  ) => {
    const userModel = new UserModel(serverDB, userId);
    await userModel.updatePreference(preference);
  };
}
