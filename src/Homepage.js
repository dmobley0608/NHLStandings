import React from 'react'


class Homepage extends React.Component{
    
    teamList = ["Lightning", "Flyers", "Canadians", "Panthers", "Penguins", "Capitols"];
    
    topFive =()=>{
        let topFiveTeams = []
        for(let i =0; i<5; i++){
            topFiveTeams.push(this.teamList[i])
        }
        return topFiveTeams
    }
    
    createTeamTable =()=>{
        let top5teams = this.topFive()
     return(  <table className='teamtable'>
            <tr>
                <td></td>
                <td></td>
                <td>NHL TOP 5</td>
                <td></td>
                <td></td>
            </tr>
            <tr> 
                <td>RANK</td>
                <td>TEAM</td>
                <td>POINTS</td>
                <td>WINS</td>
                <td></td>
            </tr>
            {top5teams.map(team=>               
                <tr>
                    <td>{this.teamList.indexOf(team,0) + 1}</td>
                    <td>{team}</td>
                    <td>Points Go Here</td>
                    <td>Wins go Here</td>
                    <td></td>
                </tr>               
            )}
                
        </table>
     )
    }
    render(){
        return(
            <div>
                <div>
                    <h1>Welcome to the NHL League Standings</h1>
                </div>
                <div>
                    {this.createTeamTable()}
                </div>
            </div>
        );
    }
}
export default Homepage;