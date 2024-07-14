import Rajgad1img from "../assets/rajgad 2.jpg";
import Rajgad2img from "../assets/Rajgad_Fort_in_Pune,_Maharashtra.jpg";
import Raigad1img from "../assets/Nagarkhana,_Raigad_Fort,_India.jpg";
import Raigad2img from "../assets/raigad3.jpg";
import Shivneri1img from "../assets/Shivneri1.jpg";
import Shivneri2img from "../assets/Shivneri2.jpg";
import pratapgad1 from "../assets/Pratapgad1.jpg";
import pratapgad2 from "../assets/pratap3.jpg";
import panhala1 from "../assets/panhala1.jpg";
import panhala2 from "../assets/panhala2.jpg";
import vijay1 from "../assets/vijay1.jpg";
import vijay2 from "../assets/vijay2.jpg";
import Sindh1 from "../assets/Sindhudurg_Fort_Home.jpg";
import Sindh2 from "../assets/sindhu2.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination =() =>{
    return(
        <div className="destination">
            <h1> Popular Destinations </h1>
            <p>Tours give you the opportunity to see a lot ,within a time frame.</p>
            <DestinationData className="first-des"
            heading ="Rajgad Fort Balekilla, Pune"
            text="Rajgad is a Hill region fort situated in the Pune 
                    district of Maharashtra, India. Formerly known as
                     Murumbdev, the fort was the first capital of the 
                     Maratha Empire under the rule of Chhatrapati Shivaji for almost 26 years, 
                     after which the capital was moved to the Raigad Fort."


            img1={Rajgad1img}      
            img2={Rajgad2img}    
            />
  <DestinationData className="first-des-reverse"
            heading ="Fort Raigad ,Raigad"
            text="Raigad, situated in the Raigad district of Maharashtra, India,
             is a hill fort located in the town of Mahad. It is one of the strongest
              fortresses on the Deccan Plateau 
            and was historically referred to as Rairee or Rairy fort."


            img1={Raigad1img}      
            img2={Raigad2img}    
            />

<DestinationData className="first-des"
            heading ="Shivneri Fort,Pune"
            text="Shivneri Fort is a 17th-century military fortification located near 
            Junnar in Pune district in Maharashtra, India. It is the birthplace of Chhatrapati 
            Shivaji Maharaj, the founder of Maratha Empire.here are statues of Jijabai and young 
            Shivaji inside the fort. At the centre of the fort is a water pond which is called ‘Badami Talav’. 
            To the South of ‘Badami Talav’ are the statues Jijabai and a young Shivaji. In the fort
             there are two water springs,
             called Ganges and Yamuna, which have water throughout the year"


            img1={Shivneri1img}      
            img2={Shivneri2img}    
            />

<DestinationData className="first-des-reverse"
            heading ="Pratapgad Fort ,Mahabaleshwar"
            text="Pratapgad is 21 kms from Mahabaleshwar on Mahad Road. 
            It is very important fort as the major fight with Afzal Khan took
             place here on 10’th November 1659. In 1656 Ch. Shivaji Maharaj built this fort.
              The height of this fort is 3543 feet above sea level. Also temple of Tulja Bhavani 
              has been built here by Ch. Shivaji Maharaj. 
            You can have vast look out of Hundreds of kilometer area right from Konkan."


            img1={pratapgad1}      
            img2={pratapgad2}    
            />

<DestinationData className="first-des"
            heading ="Panhala Fort, Kolhapur"
            text="The Panhala Fort lies 20 km away from the main city of Kolhapur, 
            situated at its north-west. This fort holds its position amongst the most
             massive location in the country and is the largest one in the Deccan region.
              It was built in a strategic position where a major trade route ran within Maharashtra 
              from Bijapur to the coasts of Arabian Sea. This place is not only a must-visit for the people
             who love exploring historic locations but also for those who love to trek.
Looking over the green slopes of Sahyadri, it has around 7 kilometres of fortifications along
 with full proof protection guaranteed by three double-walled gates which are humongous in size. The entire stretch of Panhala Fort is dotted with parapets, ramparts, and bastions and styled with motifs of different dynasties that ruled over the fort - the Marathas, Bahamas, Mughals and so on."


            img1={panhala1}      
            img2={panhala2}    
            />

            
<DestinationData className="first-des-reverse"
            heading ="Vijaydurg Fort"
            text="Vijaydurg, the oldest fort on the Sindhudurg coast, was 
            constructed during the regime of Raja Bhoja II of the Shilahar
             dynasty and restructured by Chhatrapati Shivaji Maharaj. Earlier, 
             the fort encompassed an area of 5 acres 
            and was surrounded by sea on all four sides."


            img1={vijay1}      
            img2={vijay2}    
            />

<DestinationData className="first-des"
            heading ="Sindhudurg Fort ,Malvan"
            text="Sindhudurg Fort is a historical sea fort located 
            in Arabian Sea near the Konkan region of Maharashtra in
             Western India. The fort, commissioned by Chhatrapati Shivaji,
              was constructed between 1664 and 1667."


            img1={Sindh1}      
            img2={Sindh2}    
            />

        </div>

    )
}
export default Destination