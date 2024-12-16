import { TypeAnimation } from 'react-type-animation';

const TypeAni = () => {
    return (
        <div className='text-5xl font-serif font-bold text-center lg:text-start'>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Computer Enginer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Front End Developer',
                    1000,
                    'React JS Developer',
                    1000,
                    'React Native Developer',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
        </div>
    );
};