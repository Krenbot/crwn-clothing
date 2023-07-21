import { screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';

import Navigation from '../navigation.component';
import { renderWithProviders } from '../../../utils/test/test.utils';
import { signOutStart } from '../../../store/user/user.action';

import * as userAction from "../../../store/user/user.action";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
}));

describe('Navigation Tests', () => {
    const useDispatchMock = reactRedux.useDispatch;
    beforeEach(() => {
        useDispatchMock.mockImplementation(() => () => { });
    });
    afterEach(() => {
        useDispatchMock.mockClear();
    });

    test('It should render a sign-in link (and not a sign out link) if there is no current user', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                user: {
                    currentUser: null,
                }
            }
        });
        const signInLinkElement = screen.getByText(/sign in/i);
        expect(signInLinkElement).toBeInTheDocument();

        const signOutLinkElement = screen.queryByText(/sign out/i);
        expect(signOutLinkElement).toBeNull();
    });

    test('It should render sign-out (and not sign-in) if there is a current user', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                user: {
                    currentUser: {}
                }
            }
        });

        const signInLinkElement = screen.queryByText(/sign in/i);
        expect(signInLinkElement).toBeNull();

        const signOutLinkElement = screen.getByText(/sign out/i);
        expect(signOutLinkElement).toBeInTheDocument();
    });

    test('It should NOT render a cart dropdown if IsCartOpen is false', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                cart: {
                    isCartOpen: false,
                    cartItems: []
                }
            }
        });

        const dropdownTextElement = screen.queryByText(/your cart is empty/i);
        expect(dropdownTextElement).toBeNull();
    });

    test('It should render a cart dropdown if isCartOpen is true', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                cart: {
                    isCartOpen: true,
                    cartItems: []
                }
            }
        });

        const dropdownTextElement = screen.getByText(/your cart is empty/i);
        expect(dropdownTextElement).toBeInTheDocument();
    });

    test('it should dispatch SignOutStart when clicking sign out link', async () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                user: {
                    currentUser: {}
                }
            }
        });
        const signOutLinkElement = screen.getByText(/sign out/i);
        //Spy signOutStart

        const signOutStartAction = jest.spyOn(userAction, 'signOutStart');
        expect(signOutLinkElement).toBeInTheDocument();

        await fireEvent.click(signOutLinkElement);
        expect(useDispatchMock).toHaveBeenCalled();
        expect(signOutStartAction).toHaveBeenCalled();
    });

});
