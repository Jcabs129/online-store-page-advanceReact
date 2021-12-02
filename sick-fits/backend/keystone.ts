import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import 'dotenv/config';
import { insertSeedData } from './seed-data';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

// logging in keystone backend
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long should they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User', // choosing which property for Auth
  identityField: 'email', // Which field will be the one to idntify the user = email
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: add in initials roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      console.log(args);
    },
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },

    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        console.log('connected to the DB!!!');
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone);
        }
      },
    },

    lists: createSchema({
      // schema items go in here
      User,
      Product,
      ProductImage,
    }),

    ui: {
      // isAccessAllowed: () => true, // Allowing it true for anyone

      // show the UI only for people who pass this test
      isAccessAllowed: ({ session }) => {
        console.log(session);
        // return session?.data;
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      User: 'id name email',
    }),
  })
);
