import { Menu } from '../menu';
import './header.css'

export const Header = () =>{
    return(
        <div className='Content-one'>
        <Menu/>
        <div className='Container-text'>
          <h2>Get CashBack up to 50%</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente accusamus amet perspiciatis praesentium, pariatur reiciendis dolores laborum alias cumque error atque nisi sint sunt, repudiandae aliquam temporibus quas ipsam?</p>
          <button>Order Now</button>
        </div>
      </div>
    );
}