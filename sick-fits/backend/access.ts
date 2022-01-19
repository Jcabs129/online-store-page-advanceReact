import { ListAccessArgs } from './types';
// At its simplest, the access controls returns a yes or no value depending on the users session

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermissions = object.fromEntries(
  permissionsList.map((permissioms) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// Permissions check if someone meets a criteria yes or no
export const permissions = {
  ...generatedPermissions,
  isAwesome({ session }: listAccessArgs) {
    return session?.data.name.includes('wes');
  },
};

// Rule based function
