import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../store/root-reducer';

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        store = createStore(rootReducer, preloadedState),
        ...renderOptions
    } = {}
) {
    const Wrapper = ({ children }) => {
        return (
            <Provider store={store}>
                {children}
            </Provider>
        )
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
};