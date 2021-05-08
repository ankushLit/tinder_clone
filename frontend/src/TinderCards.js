import React,{ useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople]=useState([
        {
            name:"Rajkumar Rao",
            url:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/04/16/566290-rajkummar-rao-041717.jpg",
        },
        {
            name:"Priyanka Chopra",
            url:"https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/priyanka_chopra_1200x768_660_290421112823.jpg",
        },
        
        {
            name:"Vikky Kaushal",
            url:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/09/10/729673-vickykaushal-091118.jpg",
        }
    ]);

    const swiped=(direction,nameToDelete)=>{
        console.log("Removing: "+nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame=(name)=>{
        console.log(name+"left the screen");
    };

    return (
        <div className="tinderCards">
        <div className="tinderCards__cardContainer"> 
            {people.map(person=>(
                <TinderCard className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>swiped(dir, person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                    <div
                        style={{backgroundImage: `url(${person.url})`}}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                
            ))}
        </div>
        </div>
    )
}

export default TinderCards
