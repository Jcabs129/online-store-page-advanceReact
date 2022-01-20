import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';
// At its simplest, the access controls returns a yes or no value depending on the users session

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// Permissions check if someone meets a criteria yes or no
export const permissions = {
  ...generatedPermissions,
  isAwesome({ session }: listAccessArgs): boolean {
    return session?.data.name.includes('James');
  },
};

// Rule based function
// Rules can return a boolean - yes or no - or a filter which limitis which products they CRUD.

export const rules = {
  canManageProducts({ session }): ListAccessArgs {
    // 1. Do they have the permission of canManageProducts
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // 2. If not, do they own this item?
    return { user: { id: session.itemId } };
  },
};
