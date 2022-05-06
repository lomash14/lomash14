console.log("coding challenge 3")
// const game={
//     team1:'Mumbai IND',
//     team2:'Lucknow GNT',
//     players:[
//         [
//             'rohit',
//             'ishan',
//             'surya',
//             'pollard',
//             'brevis',
//             'tilak',
//             'divid',
//             'mills',
//             'bumrah',
//             'allen',
//             'arjun'
//         ],
//         [
//             'kl rahul',
//             'southee',
//             'dhawan',
//             'de kock',
//             'neesham',
//             'anmolpreet',
//             'avesh khan',
//             'gautam',
//             'rabada',
//             'iyer',
//             'anukul'
//         ]
//     ],
// score:'4:0',
// scored:['kl rahul','surya','dekock','brevis'],
// date:'9th Apr, 2022',
// odds:{
//     team1:1.33,
//     x: 3.25,
//     team2:6.5,
// },
// }

// //1
// const[players1,players2]=game.players;
// console.log(players1,players2); //using destructuring property we can merge two arrays

// //2 //goalkeeper and remaning

// const[gk,...remaining]= players1
// console.log(gk,remaining);

// //3 using spread operator merge all players

// const allPlayers =[...players1,...players2];
// console.log(allPlayers);

// //4 

// const playersTeam=[...players1,'tiago','mitchell']; //it adds players  in players string
// console.log(playersTeam);

// //5 --
// const {odds: {team1,x:draw,team2}}=game;
// console.log(team1,draw,team2);
// //6

// const playerGoals=function (...players) {
//     console.log(players);
//     console.log(`${players.length} goals were scored`) // 3 scores are scored
// }
// playerGoals('sk','dc','rr');
// playerGoals(...game.scored);

// //7--
// team1 < team2 && console.log("team 2 is likely to win")
// team1 > team2 && console.log("team 1 is likely to win")


//challenge 2


const game={
        team1:'Mumbai IND',
        team2:'Lucknow GNT',

        players:[
            [
                'neuer',
                'powell',
                'pooran',
                'astan',
                'messi',
                'ronaldo',
                'oman',
                'chris',
                'oshane',
                'tshishki',
                'edward'

            ],
            [
                'saymonds',
                'donald',
                'henry',
                'neymar',
                'carlos',
                'romeo',
                'matinio',
                'asghar',
                'brooke',
                'raymonds',
                'henry'



            ],
        ],
        score:'4:0',
        scored:['neymar','messi','ronaldo','carlos'],
        date:'april 27,2022',
        odds:{
            team1:1.33,
            x:3.25,
            team2:6.25
        }

    }


    //task 1---

    const goals=[...game.scored];
    for(const [i,el] of goals.entries()){
        console.log(`Goal:${i+1}: ${el}`);
    }
  
    //task 2-- average of odd--

    let odds=Object.values(game.odds)
    let odds1=Object.keys(game.odds)
    let avg=0;
    for(const odd of odds)
    avg+=odd;
    avg/=odds.length
    console.log(`The average of ${odds1} is ${avg}`);

    //task 3-- print winners

    for(const [team,odd] of Object.entries(game.odds)){
        // console.log(team,odd);
       const teamStr = team === 'x'? 'draw' : `victory ${game[team]}`
    console.log(` Odd of ${teamStr} ${odd}`);
    } 
   