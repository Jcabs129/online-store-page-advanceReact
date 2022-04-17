// https://courses.wesbos.com/account/access/612e8c5cb36fe451adb8c9da/view/626532450

import { render, screen, wait, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import userEvent from '@testing-library/user-event';
import RequestReset, {
  REQUEST_RESET_MUTATION,
} from '../components/RequestReset';

const email = 'james@gmail.com';

const mocks = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: { email },
    },
    result: {
      data: { sendUserPasswordResetLink: null },
    },
  },
];

describe('<RequestReset/>', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <MockedProvider>
        <RequestReset />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('calls the mutation when submitted', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <RequestReset />
      </MockedProvider>
    );
    //  type into the email box
    userEvent.type(screen.getByPlaceholderText(/email/i), email); // typing email into the box

    // click submit
    userEvent.click(screen.getByText(/Request Reset/i));
    // debug();

    // Wait for the screen to show 'success'
    const success = await screen.findByText(/Success/i);
    expect(success).toBeInTheDocument();
    // screen.debug(success);
  });
});
