import './css/custmers.css';
import member1 from '../photos/angelo.jpg';
import member2 from '../photos/jo.jpg';
import member6 from '../photos/fatma.jpg';
import member7 from '../photos/kat.jpg';
import member8 from '../photos/male.jpeg';
import member9 from '../photos/unknown.jpeg';
import member10 from '../photos/ui ux.jpg';
import member11 from '../photos/back.jpg';
import member12 from '../photos/voice over.jpg';



export default function Custmors(){
  const members = [
    {id: 1, nameMember: "Angluos Rezq" ,jopMember: "CEO,SoftWare Engineering" , photoMember: member1 },
    {id: 2, nameMember: "Youssef Shaban" ,jopMember: "Front-End" ,  photoMember: member2 },
    {id: 3, nameMember: "Abdulrahman" ,jopMember: "Back-End" ,  photoMember: member11  },
    {id: 4, nameMember: "jhon Mohsen" ,jopMember: "UI/UX Designer" , photoMember: member10},
    {id: 5, nameMember: "Fatma AWny" ,jopMember: "Flutter developer" ,  photoMember: member6},
    {id: 6, nameMember: "Hadeer Dahy" ,jopMember: "Graphic Designer" ,  photoMember: member9},
    {id: 7, nameMember: "Michael" ,jopMember: "social media design" ,  photoMember: member8},
    {id: 8, nameMember: "Abdulrahman abo elhassan" ,jopMember: "Voice Over" ,  photoMember: member12},
    {id: 9, nameMember: "katherine Adel" ,jopMember: "Data Analysis" ,  photoMember: member7},
  ];
  const myMember = members.map((member) => {
    return (
    <div key={member.id} className='flex-member'>
       <img src = {member.photoMember} alt = "Team Member" style={{width:"160px",borderRadius:"50%",height:"100px"}}/>
        <p> {member.nameMember}</p>
        {/* <p>stars</p> */}
         <p style={{color:'#bbb4b4'}}> {member.jopMember}</p>
    </div>
    );
    
  
  });
    return(
        <section>
            <div className="title-custmors">
                <h4> Why custmors love</h4>
                <h2>Working with us</h2>
            </div>
            <div className="text-custmors">
                <p>
Techno-Media team stands out for its assembly of elite developers and software engineers with high skills and diverse experiences. Each team member boasts an impressive resume reflecting their dedication and uniqueness in various technical domains. The developers possess extensive expertise in advanced software development and technology, contributing to enhancing the overall capabilities of the team.<br></br>

Additionally, Techno-Media relies on outstanding student trainees who compete to join the team and excel in their respective fields. This approach allows the team to benefit from fresh ideas and youthful energy, fostering innovation and creativity in daily work.
<br></br>
The spirit of collaboration among team members is a standout feature of Techno-Media, working as an integrated unit striving towards common goals with continuous cooperation. The team embraces a comprehensive approach to teamwork, where each member contributes their skills and experiences to support others and achieve innovative and effective results.
<br></br>
In this way, Techno-Media demonstrates its commitment to quality and innovation in software development, with a focus on building a work environment that stimulates creativity and continuous learning.
                </p>
              
                </div>
                <div className="team-customers">
                      {myMember}
                 
                </div>
        </section>
    );
}