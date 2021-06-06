import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import kholi from "../photos/Kohli.jpg";
import Card from "../component/card";
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
import "./input.css";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function Inputfield() {
    const classes = useStyles();
    const [cricketBool, setIndiaBool] = React.useState(false);
    const [englandBool, setEnglandBool] = React.useState(false);
    const [australiaBool, setAustraliaBool] = React.useState(false);
    const [playerValue, setPlayerValues] = React.useState('');
    const [playerName,setPlayerName] = React.useState([]);
    const [playerContents,setPlayerContents] = React.useState([]);


    const  handleTeams =  (e) =>  {
         const values = e.target.value;
        if ( e.target.value == 10) {
            
            setPlayerName(old => [  {
                id: 1,
                playerName: "Virat",
                values: "virat"
            },
            {
                id: 2,
                playerName: "Dhoni",
                values: "dhoni"
            },
            {
                id: 3,
                playerName: "Sehwag",
                values: "sehwag"
            },
            {
                id: 4,
                playerName: "Gambir",
                values: "gambir"
            }]);
            setIndiaBool(true);
        }
        else {
            setIndiaBool(false);
        }
        console.log(playerName);
        if (values == 20) {
            setPlayerName(old => [   {
                id: 1,
                playerName: "Joy Root",
                values: "root"
            },
            {
                id: 2,
                playerName: "Ben Strokes",
                values: "strokes"
            },
            {
                id: 3,
                playerName: "Buttler",
                values: "buttler"
            },
            {
                id: 4,
                playerName: "Archer",
                values: "archer"
            }]);
            setIndiaBool(true);
        }
        else {
            setEnglandBool(false);
        }
        if (values == 30) {
            setAustraliaBool(true);
            setPlayerName(old => [   {
                id: 1,
                playerName: "David Warner",
                values: "warner"
            },
            {
                id: 2,
                playerName: "Steve Smith",
                values: "smith"
            },
            {
                id: 3,
                playerName: "Mathew Hayden",
                values: "hayden"
            },
            {
                id: 4,
                playerName: "Gilchrist",
                values: "ghil"
            }]);
            setIndiaBool(true);
        }
        else {
            setAustraliaBool(false);
        }
    }
    const handlePlayers = (e) => {
        console.log('players', e.target.value);
        setPlayerValues(e.target.value);
        const playerUniqueValue = e.target.value;
        if(playerUniqueValue == "virat")
        {
            setPlayerContents(old => [ {
            id:1,
            values:"virat",
            image:kholi,
            name:"Virat Kholi",
            country:"India",
            field:"Batsman",
            achievements:"Bharat Ratna",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"5th November 1988"
            }
            ])
        }
        if(playerUniqueValue == "dhoni")
        {
            setPlayerContents(old => [ {
                id:2,
                values:"dhoni",
                image:ms,
                name:"Mahendra Sigh Dhoni",
                country:"India",
                field:"Batsman",
                achievements:"Bharat Ratna",
                content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
                born:"7th July 1981"
            }
            ])
        }
       

        if(playerUniqueValue == "sehwag")
        {
            setPlayerContents(old => [  {
                id:3,
                values:"sehwag",
                image:viru,
                name:"Virunder Sehwag",
                country:"India",
                field:"Batsman",
                achievements:"Bharat Ratna",
                content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
                born:"20th October 1978"
            }
            ])
        }
      

        if(playerUniqueValue == "gambir")
        {
            setPlayerContents(old => [ {
            id:4,
            values:"gambir",
            image:gowtham,
            name:"Gowtham Gamphir",
            country:"India",
            field:"Batsman",
            achievements:"Bharat Ratna",
            content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
            born:"14th October 1981"
        }
            ])
        }
       

        if(playerUniqueValue == "root")
        {
            setPlayerContents(old => [  {
                id:5,
                values:"root",
                image:joy,
                name:"Joy Root",
                country:"England",
                field:"Batsman",
                achievements:"Best Cricket Award",
                content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
                born:"30th December 1990"
            }
            ])
        }
       

        if(playerUniqueValue == "strokes")
        {
            setPlayerContents(old => [  {
                id:6,
                values:"strokes",
                image:ben,
                name:"Ben Strokes",
                country:"England",
                field:"All-Rounder",
                achievements:"Best Cricket Award",
                content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
                born:"4th June 1991"
            }
            ])
        }
      

        if(playerUniqueValue == "buttler")
        {
            setPlayerContents(old => [  {
                id:7,
                values:"buttler",
                image:butl,
                name:"Jos Buttler",
                country:"England",
                field:"Batsman",
                achievements:"Best Cricket Award",
                content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
                born:"4th June 1991"
            }
            ])
        }
      
        if(playerUniqueValue == "archer")
        {
            setPlayerContents(old => [  {
                id:8,
                values:"archer",
                image:arch,
                name:"Jofra Archer",
                country:"England",
                field:"Bowler",
                achievements:"Best Cricket Award",
                content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
                born:"1st April 1995"
            }
            ])
        }
     

       if(playerUniqueValue == "warner")
        {
            setPlayerContents(old => [  {
                id:9,
                values:"warner",
                image:david,
                name:"David Warner",
                country:"Australia",
                field:"Batsman",
                achievements:"Best Cricket Award",
                content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
                born:"27th October 1986"
            } 
            ])
        }
     
        if(playerUniqueValue == "smith")
        {
            setPlayerContents(old => [ {
                id:10,
                values:"smith",
                image:steve,
                name:"Steve Smith",
                country:"Australia",
                field:"Batsman",
                achievements:"Best Cricket Award",
                content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
                born:"2th June 1989"
            } 
            ])
        }
     

        if(playerUniqueValue == "hayden")
        {
            setPlayerContents(old => [  {
                id:11,
                values:"hayden",
                image:mathew,
                name:"Mathew Hayden",
                country:"Australia",
                field:"Batsman",
                achievements:"Best Cricket Award",
                content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
                born:"29th Octomber 1971"
            }
            ])
        }
      

        if(playerUniqueValue == "ghil")
        {
            setPlayerContents(old => [  {
                id:12,
                values:"ghil",
                image:gilly,
                name:"Adam Gilchrist",
                country:"Australia",
                field:"Batsman",
                achievements:"Best Cricket Award",
                content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
                born:"14th November 1971"
            }
            ])
        }
      

        console.log('player array',playerContents);
    }


    return (
        <div className="input_group">
          <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Team</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleTeams}
                >
                    <MenuItem value={10}>India</MenuItem>
                    <MenuItem value={20}>England</MenuItem>
                    <MenuItem value={30}>Australia</MenuItem>
                </Select>
            </FormControl>
            {cricketBool ?
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Players</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={handlePlayers}
                        >
                            {playerName.map(player => {
                                return (
                                    <MenuItem key={player.id} value={player.values}>{player.playerName}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div> : null}
          {/* <PlayerDetails playersValue={playerValue} /> */}
          <Card contents={playerContents}/>
          
      

            
        </div>
    )
}
