import { useOnMountEffect } from '@codexporer.io/react-hooks';
import { di } from 'react-magnetic-di';

export const OnMount = ({
    onMount,
    onUnmount
}) => {
    di(useOnMountEffect);

    useOnMountEffect({ onMount, onUnmount });

    return null;
};
