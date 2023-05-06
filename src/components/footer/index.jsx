import './footer.css'
import Wpp from '../../images/wpp.png'
import Twitter from '../../images/Vector Smart Object.png'
import Instagram from '../../images/Instagram.png'
import Facebook from '../../images/facebook.png'
export const Footer = () =>{
    return(
        <div className='footer'>
        <div className='footer-text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. </p>
        </div>
        <div className='footer-icons'>
            <img width={30} height={30} src={Instagram} alt="" />
            <img width={30} height={30} src={Facebook} alt="" />
            <img width={30} height={30} src={Twitter} alt="" />
            <img width={30} height={30} src={Wpp} alt="" />
           
        </div>
 </div>
    )
}