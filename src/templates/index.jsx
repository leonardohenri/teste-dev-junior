

import './styles.css';
import { Header } from '../components/header';
import { ContentOne } from '../components/contents/contentOne';
import { ContentTwo } from '../components/contents/contentTwo';
import { ContentThree } from '../components/contents/contentThree';
import { Contact } from '../components/contents/Contact';
import { Footer } from '../components/footer';


export const Home = () =>{


return(
<div className='Body'>
  <Header/>
  <ContentOne/>
  <ContentTwo/>
  <ContentThree/>
  <Contact/>
  <Footer/>
</div>
  );
}
