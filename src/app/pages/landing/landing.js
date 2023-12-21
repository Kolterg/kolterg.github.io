import './landing.scss';
import { redirect } from 'react-router-dom';
import SearchBar from 'app/components/searchBar';

export async function action({ request }) {
    const formData = await request.formData();
    const searchData = Object.fromEntries(formData);
    const { checkIn, checkOut, person} = searchData;
    return redirect(`/reservations/?checkIn=${checkIn}&checkOut=${checkOut}&person=${person}`);
}

function LandingPage() {
    return (
        <div id='LandingPage'>
            <div className='greatings'>
                <h2>Welcome to</h2>
                <h1>H Sol de Canta</h1>
                <p>We are a family accommodation that seeks to provide good experiences through family treatment and quality service.</p>
            </div>
            <SearchBar
                method={{method: 'post'}}
            />
        </div>
    )
}

export default LandingPage;