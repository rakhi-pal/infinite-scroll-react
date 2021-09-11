import { render } from '@testing-library/react';
import MediaCard from '../components/MediaCard/MediaCard';
import {create, act} from 'react-test-renderer'; 
import Card from '@material-ui/core';

test('renders MediaCard component', () => {
    const props = {
        user: {
            picture: {
                large: 'abc.png',
            },
            name: {
                first: 'first',
                last: 'last'
            },
            email: 'abc@test.com',
            phone: '1234565',
            cell: '1234567890'
        }
    }
    render(<MediaCard {...props} />);
});

test('Card component renders inside MediaCard component', () => {
    const props = {
        user: {
            picture: {
                large: 'abc.png',
            },
            name: {
                first: 'first',
                last: 'last'
            },
            email: 'abc@test.com',
            phone: '1234565',
            cell: '1234567890'
        }
    }

    let MediaCardComponent;
    act(() => {
        MediaCardComponent = create(<MediaCard {...props} />);
    })
    expect(MediaCardComponent.toJSON()).toMatchSnapshot();
});
