import React from 'react';
import Card from './card';
import swim from './Components/Images/swim.jpg';
import wedding from './Components/Images/wedding.jpg';
import mountain from './Components/Images/mountain.jpg';
import sad from "./Components/Images/sad.png"
import sad1 from "./Components/Images/swim.png"
import sad2 from "./Components/Images/boat.jpg"

export default function Card2(){
    return(
        <div className=' d-flex '>
            <Card  
             img = {swim}
             Headin = "World swimmer of the year"
             p="Won the championship title"
             sad={sad1}
            />
            <Card 
            img = {wedding}
            Headin = "Wedding photography"
            p="The husband is not quite happy though"
            sad= {sad}
            />
            <Card
            img = {mountain}
            Headin = "High mountain photography"
            p="Photo taken moments before disaster"
            sad={sad2}
            />
        </div>
    )
}