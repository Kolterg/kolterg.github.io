import './about.css';

import TestFoto1 from '../../../assets/img/about/testFoto1.png';
import TestFoto2 from '../../../assets/img/about/testFoto2.png';

function AboutPage() {
    return (
        <div className='About'>
            <div className='block'>
                <div className='text1'>
                    <h1>About us:</h1>
                    <p>
                        We are a family accommodation that seeks to provide good experiences through family treatment and quality service.
                        <br />
                        <br />
                        We have been working for you since 2016 to date with the purpose of delivering wonderful travel experiences to each of our guests.
                        <br />
                        <br />
                        Committed to making each traveler feel at home during the duration of their stay, providing them with a personalized service in order to create lasting relationships over time. <br />
                        We are characterized by our commitment, honesty, respect, responsibility and dedication to service.
                        <br />
                        <br />
                        Ми забезпечимо вм найкращій досвід туризму у цьому регіоні
                    </p>
                </div>
                <img src={TestFoto1} alt='Accommodation'/>
            </div>
            <div className='block'>
                <img src={TestFoto2} alt='Family'/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit duis tristique. Lectus nulla at volutpat diam ut venenatis tellus in. Ac turpis egestas integer eget aliquet. Duis at tellus at urna condimentum mattis pellentesque.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Morbi blandit cursus risus at ultrices mi tempus.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris augue neque gravida in. Adipiscing vitae proin sagittis nisl.
                </p>
            </div>
        </div>
    )
}

export default AboutPage;