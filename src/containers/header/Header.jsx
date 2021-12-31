import React from 'react';
import './header.css';
import ghost from '../../assets/ghost.png';

const Header = () => {
    return (
        <div className='header section__padding' id='home'>
            <div className='header-content'>
                <h1 className='gradient__text'>Something Awesome Is Comming Soon!</h1>
                <p className='gradient__text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p> 
                <div className='header-content__input'>
                       <input type="email" placeholder='email address'/>
                       <button type='button'>Subscribe</button>
                </div>
            </div>
            <div className='header-image'>
                    <img src={ghost} alt='ghost'/>
                </div>
        </div>
    )
}

export default Header
