
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

// Add this at the top of the file (or just above the class declaration)
interface UserPreference {
  // Define the expected structure of user preferences
  [key: string]: unknown;
}

// Within your AdminService class, update the method signature:
  updateUserPreference = async (
    userId: string,
-   preference: any
+   preference: UserPreference
  ) => {
    // … existing implementation …
  }
    const userModel = new UserModel(serverDB, userId);
    await userModel.updatePreference(preference);
  };
}
