import React from 'react';
import Container from '../../components/Container/Container';

const Home = () => {
    return (
        <div>
           <Container>
             <div className=' bg-slate-200 p-10'>
                <h2>Book a Car</h2>
                <form>
                    <div>
                        <label className='block'>
                            Select your car type
                        </label>
                        <input type="text" name="" id="" />
                    </div>
                </form>
             </div>
           </Container>
        </div>
    );
};

export default Home;