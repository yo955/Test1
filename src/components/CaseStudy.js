import './css/caseStudy.css';
import pic1 from '../photos/case studies/book corner.png';
import pic2 from '../photos/Case-study2.png';
import pic3 from '../photos/Case-study3.png';
import '../components/css/styleToAll.css';


export default function CaseStudy(){
    const casesShow = [
        {id : 1 , pic : pic1  , h3Text : "Web Application... Book store ", pText : "your one-stop destination for all things literary. Whether you're a casual reader or a dedicated bibliophile, our store offers a vast collection of books across all genres and formats. Find the best books from your favorite writers, explore hundreds of books with all possible categories, take advantage of the 50% discount and much more.",link:"https://book-corner-1.netlify.app/"},
        {id : 2 , pic : pic2 , h3Text : "Mobile Application... metro", pText : "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry." ,link:"https://test11-011.netlify.app/"  },
        {id : 3 , pic : pic3 , h3Text : "UI/UX Design... techno media", pText : "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry." ,link:"https://guess-the-word-game-n02.netlify.app/"  }
    ];
    const cases = casesShow.map((caseShow ) => {
        return (

            <div className='flex-caseStudy' key ={caseShow.id}>
                <div className='pic'>
                   <img  src={caseShow.pic} alt= "case study"/>
                </div>
                <div  className ="case-text" style = {caseShow.stylee}>
                    <h3> {caseShow.h3Text}</h3>
                    <p>{caseShow.pText}</p>
<div className='more'>
                    <button> Read More 
                    </button>
                    <button target='_blank' className='link'>Demo:{caseShow.link}</button>
</div>
                </div>
            
            </div>

        );

    });


    return(
        <section  className="case-study">
            <div className= "container-caseStudy"> 
            <hr/>
            <h2>
                <span>  Our recent</span>
                Case studies
            </h2>
            <article>
                     {cases}
         <button href ="#" className='read-case'> Read More Case Study</button>
            </article>

         </div>
        </section>
    );
}