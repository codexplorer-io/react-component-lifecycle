import React from 'react';
import { injectable } from 'react-magnetic-di';
import { useOnMountEffect } from '@codexporer.io/react-hooks';
import { mountWithDi } from '@codexporer.io/react-test-utils';
import { OnMount } from './index';

describe('OnMount', () => {
    const defaultProps = {
        onMount: jest.fn(),
        onUnmount: jest.fn()
    };

    const onMountEffectMock = jest.fn();

    const defaultDeps = [
        injectable(useOnMountEffect, onMountEffectMock)
    ];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render nothing', () => {
        const wrapper = mountWithDi(<OnMount />, { deps: defaultDeps });

        expect(wrapper.isEmptyRender()).toBe(true);
    });

    it('should pass no lifecycle function into useOnMountEffect hook', () => {
        mountWithDi(<OnMount />, { deps: defaultDeps });

        expect(onMountEffectMock).toHaveBeenCalledTimes(1);
        expect(onMountEffectMock).toHaveBeenCalledWith({});
    });

    it('should pass lifecycle functions into useOnMountEffect hook', () => {
        mountWithDi(<OnMount {...defaultProps} />, { deps: defaultDeps });

        expect(onMountEffectMock).toHaveBeenCalledTimes(1);
        expect(onMountEffectMock).toHaveBeenCalledWith({ ...defaultProps });
    });
});
