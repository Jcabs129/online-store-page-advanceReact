import { render, screen, wait, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import userEvent from '@testing-library/user-event';
import Signup, { SIGNUP_MUTATION } from '../components/SignUp';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser } from '../lib/testUtils';

const me = fakeUser();
const password = 'James';

const mocks = [
  //  mutation mock
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        name: me.name,
        email: me.email,
        password,
      },
    },
    result: {
      data: {
        createUser: {
          __typename: 'User',
          id: 'abc123',
          email: me.email,
          name: me.name,
        },
      },
    },
  },
  // Current user mock
  {
    request: { query: CURRENT_USER_QUERY }, // User component
    result: { data: { authenticatedItem: me } },
  },
];

describe('<Signup/>', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <MockedProvider>
        <Signup />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('calls the mutation properly', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <Signup />
      </MockedProvider>
    );

    // Type into the boxes - the attributes on the elements are located i.e placeholderText, then we add mock data
    await userEvent.type(screen.getByPlaceholderText(/Name/i), me.name);
    await userEvent.type(screen.getByPlaceholderText(/Address/i), me.email);
    await userEvent.type(screen.getByPlaceholderText(/Password/i), password);

    // click the submit button
    await userEvent.click(screen.getByText(/Sign Up/i));
    await screen.findByText(
      `signed up with ${me.email} - please Go ahead and sign in!`
    );
    // debug();
  });
});
