import { render } from '@testing-library/react';
import MediaCard from './MediaCard';
import { mount } from 'enzyme';
import Card from '@material-ui/core/Card';
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
    const MediaCardComponent = mount(<MediaCard {...props} />);
    expect(MediaCardComponent).toMatchSnapshot();
    expect(MediaCardComponent).toBeDefined(Card)
});
