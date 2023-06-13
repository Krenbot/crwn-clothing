import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'HATS',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
            id: 2,
            title: 'JACKETS',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
            id: 3,
            title: 'SNEAKERS',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        },
        {
            id: 4,
            title: 'WOMENS',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        },
        {
            id: 5,
            title: 'MENS',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        },
    ];

    return (
        <div>
            <Outlet />
            <Directory categories={categories} />
        </div>
    );
};

export default Home