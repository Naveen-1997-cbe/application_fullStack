import React from 'react'
import Card from "../component/card";
import kholi from "../photos/Kohli.jpg";
import ms from "../photos/ms.jpg";
import viru from "../photos/virender.jpg";
import gowtham from "../photos/gowtham.jpg";
import joy from "../photos/joy.jpg";
import ben from "../photos/ben.jpg";
import butl from "../photos/but.jpg";
import arch from "../photos/arch.jpg";
import david from "../photos/david.jpg";
import steve from "../photos/steve.jpg";
import mathew from "../photos/mathew.jpg";
import gilly from "../photos/gilly.jpg";


export default function PlayerDetails(props) {
    const [virat,setVirat] = React.useState([
        {
            id:1,
            values:"virat",
            image:kholi,
            name:"Virat Kholi",
            country:"India",
            field:"Batsman",
            achievements:"Bharat Ratna",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"5th November 1988"
        },
    ])
    const [dhoni,setDhoni] = React.useState([
        {
            id:2,
            values:"dhoni",
            image:ms,
            name:"Mahendra Sigh Dhoni",
            country:"India",
            field:"Batsman",
            achievements:"Bharat Ratna",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"7th July 1981"
        },
    ])
    const [sehwag,setSehwag] = React.useState([
        {
            id:3,
            values:"sehwag",
            image:viru,
            name:"Virunder Sehwag",
            country:"India",
            field:"Batsman",
            achievements:"Bharat Ratna",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"20th October 1978"
        },
    ])
    const [gamphir,setGamphir] = React.useState([
        {
            id:4,
            values:"gambir",
            image:gowtham,
            name:"Gowtham Gamphir",
            country:"India",
            field:"Batsman",
            achievements:"Bharat Ratna",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"14th October 1981"
        },
    ])
    const [root,setRoot] = React.useState([
        {
            id:5,
            values:"root",
            image:joy,
            name:"Joy Root",
            country:"England",
            field:"Batsman",
            achievements:"Best Cricket Award",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"30th December 1990"
        },
    ])
    const [strokes,setSteokes] = React.useState([
        {
            id:6,
            values:"strokes",
            image:ben,
            name:"Ben Strokes",
            country:"England",
            field:"All-Rounder",
            achievements:"Best Cricket Award",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"4th June 1991"
        },
    ])
    const [buttler,setButtler] = React.useState([
        {
            id:7,
            values:"buttler",
            image:butl,
            name:"Jos Buttler",
            country:"England",
            field:"Batsman",
            achievements:"Best Cricket Award",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"4th June 1991"
        },
    ])
    const [archer,setarcher] = React.useState([
        {
            id:8,
            values:"archer",
            image:arch,
            name:"Jofra Archer",
            country:"England",
            field:"Bowler",
            achievements:"Best Cricket Award",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"1st April 1995"
        },
    ])
    const [warner,setwarner] = React.useState([
        {
            id:9,
            values:"warner",
            image:david,
            name:"David Warner",
            country:"Australia",
            field:"Batsman",
            achievements:"Best Cricket Award",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"27th October 1986"
        },
    ])
    const [smith,setsmith] = React.useState([
        {
            id:10,
            values:"smith",
            image:steve,
            name:"Steve Smith",
            country:"Australia",
            field:"Batsman",
            achievements:"Best Cricket Award",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"2th June 1989"
        },
    ])
    const [hayden,sethayden] = React.useState([
        {
            id:11,
            values:"hayden",
            image:mathew,
            name:"Mathew Hayden",
            country:"Australia",
            field:"Batsman",
            achievements:"Best Cricket Award",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"29th Octomber 1971"
        },
    ])
    const [ghil,setghil] = React.useState([
        {
            id:12,
            values:"ghil",
            image:gilly,
            name:"Adam Gilchrist",
            country:"Australia",
            field:"Batsman",
            achievements:"Best Cricket Award",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"14th November 1971"
        },
    ])
    return (
        <div>
            <h3>Player Details</h3>
            <button className="btn">click</button>
            {props.playersValue == virat[0].values ? 
                <Card contents={virat}/>  
                 : null 
            }
             {props.playersValue == dhoni[0].values ? 
                <Card contents={dhoni}/>  
                 : null 
            }
             {props.playersValue == sehwag[0].values ? 
                <Card contents={sehwag}/>  
                 : null 
            }
             {props.playersValue == gamphir[0].values ? 
                <Card contents={gamphir}/>  
                 : null 
            }
             {props.playersValue == root[0].values ? 
                <Card contents={root}/>  
                 : null 
            }
             {props.playersValue == strokes[0].values ? 
                <Card contents={strokes}/>  
                 : null 
            }
              {props.playersValue == buttler[0].values ? 
                <Card contents={buttler}/>  
                 : null 
            }
            {props.playersValue == archer[0].values ? 
                <Card contents={archer}/>  
                 : null 
            }
             {props.playersValue == warner[0].values ? 
                <Card contents={warner}/>  
                 : null 
            }
            {props.playersValue == smith[0].values ? 
                <Card contents={smith}/>  
                 : null 
            }
            {props.playersValue == hayden[0].values ? 
                <Card contents={hayden}/>  
                 : null 
            }
             {props.playersValue == ghil[0].values ? 
                <Card contents={ghil}/>  
                 : null 
            }
        </div>
    )
}
