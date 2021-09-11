import { render, screen } from '@testing-library/react';
import MediaCard from '../components/MediaCard/MediaCard';
import {create, act} from 'react-test-renderer'; 

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
test('renders MediaCard component', () => {
    let MediaCardComponent;
    act(() => {
        MediaCardComponent = create(<MediaCard {...props} />);
    })
    expect(MediaCardComponent.toJSON()).toMatchSnapshot();
});

test('check mediacard is rendered', () => {
    render(<MediaCard {...props}/>);
    const mediaCard = screen.getByTestId('mediaCard');
    expect(mediaCard).toBeInTheDocument();
});

test('check card content is rendered', () => {
    render(<MediaCard {...props}/>);
    const cardContent = screen.getByTestId('cardContent');
    expect(cardContent).toBeInTheDocument();
});

test('card contents have been displayed properly', () => {
    render(<MediaCard {...props}/>);
    const email = screen.getByText('abc@test.com');
    const phone = screen.getByText('phone: 1234565');
    const cell = screen.getByText('cell: 1234567890');
    const name = screen.getByText('first last');
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(cell).toBeInTheDocument();
    expect(name).toBeInTheDocument();
});
