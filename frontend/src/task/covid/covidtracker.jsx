import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./covid.css";
import axios from "axios";
import LineData from "./lineData";
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import TextField from '@material-ui/core/TextField';


export default function CovidTracker() {
  const [covidStateData, setcovidState] = React.useState([]);
  const [lineChartValue, setLineChartValue] = React.useState({});
  const [barChartValue, setBarChartValue] = React.useState({});
  const [pieChartValue, setPieChartValue] = React.useState({});
  const [covidBool, setCovidBool] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [filterSearch,setFilterSearch] = React.useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  useEffect(() => {
    callapi();
  }, [])




  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    table: {
      minWidth: 650,
    },
    input:{
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      }
    }
  }));


  const options = {
    title: {
      display: true,
      text: 'TEST'
    },
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 5,
        left: 15,
        right: 15,
        bottom: 15
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };






  const classes = useStyles();

  const handleFilerSearch = (e) =>{
    setFilterSearch(e.target.value.substr(0,20))
  }

  const callapi = async () => {
    let check;
    let emptyState = [];
    let emptyConfirmed = [];
    var callCovidApi = await axios.get('https://api.covid19india.org/data.json')
      .then((res => {
        console.log('data', res.data.statewise)
        check = res.data.statewise;
        for (const dataObj of res.data.statewise) {
          emptyState.push(dataObj.state)
          emptyConfirmed.push(dataObj.confirmed)
        }
        // for( let i=1; i<=check.length; i++){ 
        //   emptyState.push(check[i].state)
        //   emptyConfirmed.push(check[i].confirmed)
        // }
        setLineChartValue({
          labels: emptyState,
          datasets: [
            {
              label: "Covid",
              data: emptyConfirmed,
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ]
            }
          ]
        })
        setBarChartValue({
          labels: emptyState,
          datasets: [
            {
              label: "Covid",
              data: emptyConfirmed,
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ]
            }
          ]
        })
        setPieChartValue({
          labels: emptyState,
          datasets: [
            {
              label: "Covid",
              data: emptyConfirmed,
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',

              ]
            }
          ]
        })
      }))

    console.log('youtube', emptyState, emptyConfirmed);
    console.log('check', check)
    await setcovidState(check);

    setCovidBool(true)
    console.log('state', covidStateData);


  }
  let filteredStates = covidStateData.filter(
    (items) => {
      return items.state.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1
    }
  );
  return (
    <div>
      <h3>Covid Tracker</h3>
      {/* <LineData  contents={covidStateData}/> */}
      <div className="lineGraph">
        <Line data={lineChartValue} options={options} />
      </div>
      <div className="lineGraph">
        <Bar data={barChartValue} options={options} />
      </div>
      <div className="pieGraph">
        <Pie data={pieChartValue} width={600} height={250} options={{
          height: 260,
          responsive: true,
          maintainAspectRatio: true,
        }} />
      </div>
      <div>
        <form className={classes.input} noValidate autoComplete="off" className="ui-table">
          <TextField id="outlined-basic" label="Search" onChange={handleFilerSearch} variant="outlined" />
        </form>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>State</TableCell>
                <TableCell align="right">Active</TableCell>
                <TableCell align="right">Recovered</TableCell>
                <TableCell align="right">Confirmed</TableCell>
                <TableCell align="right">Death</TableCell>
                <TableCell align="right">Last Update Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStates.map((row) => (
                <TableRow key={row.state}>
                  <TableCell component="th" scope="row">
                    {row.state}
                  </TableCell>
                  <TableCell align="right">{row.active}</TableCell>
                  <TableCell align="right">{row.recovered}</TableCell>
                  <TableCell align="right">{row.confirmed}</TableCell>
                  <TableCell align="right">{row.deaths}</TableCell>
                  <TableCell align="right">{row.lastupdatedtime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}



































// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import "./covid.css";
// import axios from "axios";
// import LineData from "./lineData";
// import { Line } from 'react-chartjs-2';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
//   table: {
//     minWidth: 650,
//   },
// }));
// export default class CovidTracker extends Component {
//   constructor() {
//     super()
//     this.state = {
//       covidStateData: [],
//       covidBool: false,
//       value: 0,
//       options: {
//         scales: {
//           yAxes: [
//             {
//               ticks: {
//                 beginAtZero: true,
//               },
//             },
//           ],
//         },
//       },
//       data: {

//         labels: ['Total','Total set'],
//         datasets: [
//           {
//             label: 'Total',
//             data: ['250000'],
//             fill: false,
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgba(255, 99, 132, 0.2)',
//           },
//           {
//             label:'Andra Pradesh',
//             data:["150000"],
//             fill: false,
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgba(255, 99, 132, 0.2)',
//           }
//         ],
//     }
//   }
//   }
//   handleChange = (event, newValue) => {
//     this.setState({
//       value: newValue
//     })
//   };
//   async componentDidMount() {
//     await this.callapi();
//   }

//   componentDidUpdate() {
//     console.log('did update', this.state.covidStateData);
//   }



//   callapi = async () => {
//     let check;
//     var callCovidApi = await axios.get('https://api.covid19india.org/data.json')
//       .then((res => {
//         console.log('data', res.data.statewise)
//         check = res.data.statewise;
//       }))
//     console.log('check', check)
//     await this.setState({
//       covidStateData: check,
//       covidBool: true
//     })

//     console.log('state', this.state.covidStateData);

//   }


//   render() {
//     const { classes } = this.props;
//     const {covidStateData} = this.state
//     return (
//       <div>
//         <h3>Covid Tracker</h3>
//         {/* <Line data={this.state.data} options={this.state.options}/> */}
//          <Line
//           data={covidStateData.map(items => {

//             for(var i=0;i<=covidStateData.length;i++){
//               var stateList;
//               stateList = covidStateData[i].state
//             }
//             return (
//               {
//                 labels: stateList++,
//                 datasets: [
//                   {
//                     label: items.state,
//                     data: items.confirmed,
//                     backgroundColor: 'rgb(255, 99, 132)',
//                     borderColor: 'rgba(255, 99, 132, 0.2)',
//                   },
//                 ],
//               }
//             );
//           })}
//           options={this.state.options}
//         /> 
//         {/* <LineData  contents={this.state.covidStateData}/> */}
//         {/* <div className="ui-table">
//       <TableContainer component={Paper}>
//          <Table className={classes.table} aria-label="simple table">
//            <TableHead>
//              <TableRow>
//                <TableCell>State</TableCell>
//                <TableCell align="right">Active</TableCell>
//                <TableCell align="right">Recovered</TableCell>
//                <TableCell align="right">Confirmed</TableCell>
//                <TableCell align="right">Death</TableCell>
//              <TableCell align="right">Last Update Date</TableCell>
//              </TableRow>
//            </TableHead>
//            <TableBody>
//              {this.state.covidStateData.map((row) => (
//               <TableRow key={row.state}>
//                 <TableCell component="th" scope="row">
//                   {row.state}
//                 </TableCell>
//                 <TableCell align="right">{row.active}</TableCell>
//                 <TableCell align="right">{row.recovered}</TableCell>
//                 <TableCell align="right">{row.confirmed}</TableCell>
//                 <TableCell align="right">{row.deaths}</TableCell>
//                 <TableCell align="right">{row.lastupdatedtime}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       </div> */}
//       </div>
//     );
//   }
// }
























