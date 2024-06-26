import { LinkToId } from '../../../shared';

const NotFound = () => {
    return (
        <>
            <h2 className='ds-text-heading--2xl' style={{ marginTop: 0 }} id='help'>Page Not Found</h2>
            <p>Return to the <LinkToId to='/' text='homepage' offset='130' />.</p>
        </>
    );
};

export default NotFound;