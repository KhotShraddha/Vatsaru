import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/Torna Fort.jpg";
import Trip2 from "../assets/Rajgad_Fort_in_Pune,_Maharashtra.jpg";
import Trip3 from "../assets/Nagarkhana,_Raigad_Fort,_India.jpg";
import Trip4 from "../assets/panhala2.jpg";
import Trip5 from "../assets/sindhu2.jpg";
import Trip6 from "../assets/vijay1.jpg";

function Trip()
{
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Torna Fort Trek"
                text="Rising to an altitude of 4603 feet, this highest hill fort of the Pune district has marked its niche in the western ghats for the beauty it entails with its structure and aesthetics.

Its massive structure gave it the name of Prachandagad, where Prachanda in Marathi means huge, and gad means the Fort. The Fort was conquered by Chhatrapati Shivaji Maharaj at the tender age of 16 in the year 1646, post that it was ruled by many Maratha rulers and eventually became the hub of the Maratha Empire from where many battles were fought and won.

The Torna trek unfolds beautifully once you come across the beautiful temples, flower beds, water cisterns, and Balekilla. The Fort also is home to two machis, the Zunjar Machi and Budhla Machi. It also has a ridge that connects to the Rajgad Fort."
                
                
                />
       <TripData
                image={Trip2}
                heading="Rajgad Fort Trek"
                text="Rajgad trek is the most beautiful trek in Maharashtra. As the name suggests it is the king of forts. Because of the rich history and the mesmerizing architecture of the fort, it stands out among other forts in Western Ghats.

It is situated at an altitude of 4,514 ft near Pune. This fort was built on the hill Murumb Devacha Dongar, having a diameter of about 40 km. The huge size of the fort made it difficult to lay siege on it which helped the Marathas to make strategic decisions.

Rajgad was the capital of the Maratha emperor Chhatrapati Shivaji Maharaj for 26 years after which he shifted to Raigad. This is one of the reasons how the fort was built so beautifully."
                
                
                />

<TripData
                image={Trip3}
                heading="Raigad Fort Trek"
                text="Raigad was known as the mountain of “Rairi” before it was captured by Shivaji Maharaj. Due to its impregnability, Raigad was known as “Gibraltar of East”. In the 16th century, when this was not developed as a fort, it was called by local people as “Rashivata” and “Tanas”. Due to its shape of a tall oil lamp tower, it was also called as “Nandadeep”. On 6th April 1656, Shivaji Maharaj besieged Rairi and captured it in May. The then Subhedar of Kalyan was transporting the treasure of Adilshah to Bijapur, which was raided by Marathas and utilized to fortify Raigad.

Raigad Fort Trek is one of best trek. Difficulty level is Easy grade at short distance from Mumbai. Its safe and suitable for girls, women, and solo travelers. Other popular locations are Lingana, Takmak, Devkund, Malsej Ghat, Tamhini, Kundalika Valley, Kolad, Bhandardara"
                
                
                />
                </div>
                <div className="tripcard">

<TripData
                image={Trip4}
                heading="Panhala Fort"
                text=" People travelling from Pune need to take the NH4 and head towards Kolhapur. Affter the Kini Phata, there is a diversion that goes to WarnaNagar and then to the village called Panhala. This can be called the base village.
From here the locals can help you with the internal roads to the fort. There is not much trekking involved. The motorable road takes you to the top of the fort and there's plenty of parking space available on the top."
                
                
                />

<TripData
                image={Trip5}
                heading="Sindhudurg Fort Trek"
                text="Sindhudurg Fort is a magnificent example of 17th-century Maratha 
                military architecture. It is spread over an area of 48 acres and boasts 
                a formidable perimeter wall, bastions, ramparts, watchtowers, and underground passages.
                 The fort’s entrance, known as the Dilli Darwaja, is strategically hidden from view, making 
                 it difficult for enemies to locate.
 The fort is open to visitors from 8:00 AM to 5:30 PM daily. Visitors can explore the fort’s ramparts, bastions, and temples, and enjoy panoramic views of the Arabian Sea and the surrounding landscape."
                
                
                />

<TripData
                image={Trip6}
                heading="Vijaydurg Fort"
                text=" Vijaydurg , the oldest fort on the Sindhudurg coast, was constructed during the regime of Raja Bhoja II of the Shilahar dynasty (construction period 1193-1205)
                 and restructured by Shivaji Maharaj.
Earlier, the fort encompassed an area of 5 acres and
 was surrounded by sea on all four sides. 
According to legend, this is one of only two Maratha forts where Shivaji Maharaj personally hoisted the saffron flag. The other fort is Torna."
                
                
                />


            </div>
        </div>
    )
}export default Trip;