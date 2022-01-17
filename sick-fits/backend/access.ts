// At its simplest, the access controls returns a yes or no value depending on the users session

import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

export const permissions = {
  canManageProducts({ session }) {
    return session?.data.role?.canManageProducts;
  },
  canSeeOtherUsers({ session }) {
    return session?.data.role?.canSeeOtherUsers;
  },
  canManageUsers({ session }) {
    return session?.data.role?.canManageUsers;
  },
};
