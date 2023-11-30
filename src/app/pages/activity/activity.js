import './activity.css';

import ActivityImg1 from '../../../assets/img/activity/activity1.png';
import ActivityImg2 from '../../../assets/img/activity/activity2.png';

function ActivityPage() {
    return (
        <div className='Activity'>
            <div className='head'>
                <h1>Activity</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare augue et nunc aliquet rutrum. In bibendum velit nec enim dignissim, eget tristique ipsum egestas.</p>
            </div>
            <div className='content'>
                <div className='tour1'>
                    <img src={ActivityImg1} alt='Activity1' />
                    <div className='description'>
                        <h2>Wilka tours  adventures in Canta</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat magna et nulla rutrum, egestas pellentesque est placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla accumsan, nulla sit amet consequat placerat, augue metus elementum arcu, at fringilla nisl nibh non mauris.
                            <br />
                            <br />
                            Donec cursus, massa sit amet semper commodo, nunc urna venenatis neque, in eleifend lectus justo laoreet arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum pellentesque vestibulum bibendum. Suspendisse ut velit sed massa mollis dignissim. Duis quis diam nec elit porta dictum.
                            <br />
                            <br />
                            Aliquam luctus venenatis enim, non dignissim enim auctor sed. Morbi magna arcu, euismod vel pretium id, semper id libero. Nam nec felis enim. Donec euismod, eros vitae tempor laoreet, felis.
                        </p>
                    </div>
                </div>
                <div className='tour2'>
                    <div className='description'>
                        <h2>Wonder tours</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat magna et nulla rutrum, egestas pellentesque est placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla accumsan, nulla sit amet consequat placerat, augue metus elementum arcu, at fringilla nisl nibh non mauris.
                            <br />
                            <br />
                            Donec cursus, massa sit amet semper commodo, nunc urna venenatis neque, in eleifend lectus justo laoreet arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum pellentesque vestibulum bibendum. Suspendisse ut velit sed massa mollis dignissim. Duis quis diam nec elit porta dictum.
                            <br />
                            <br />
                            Aliquam luctus venenatis enim, non dignissim enim auctor sed. Morbi magna arcu, euismod vel pretium id, semper id libero. Nam nec felis enim. Donec euismod, eros vitae tempor laoreet, felis.
                        </p>
                    </div>
                    <img src={ActivityImg2} alt='Activity1'/>
                </div>
            </div>
        </div>
    )
}

export default ActivityPage;