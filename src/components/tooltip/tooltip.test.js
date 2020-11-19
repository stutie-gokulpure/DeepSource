import React from 'react';
import {
    cleanup, fireEvent, render, act,
} from '@testing-library/react';
import Tooltip from './tooltip';

afterEach(cleanup);

describe('Tooltip', () => {
    const targetText = 'Hover Me';
    const tooltipText = 'This is tooltip text';

    test('tooltip should get rendered on mouse over', async () => {
        const { getByText } = render(
            <Tooltip label={tooltipText} direction='right'>
                <span>{targetText}</span>
            </Tooltip>,
        );

        const target = getByText(targetText);

        await act(async () => {
            await fireEvent.mouseOver(target);
        });

        expect(getByText(tooltipText)).toBeTruthy();
    });
});
