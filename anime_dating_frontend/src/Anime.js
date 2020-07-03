import React from 'react';


export default class Anime extends React.Component{

    componentDidMount(){
    fetch("https://anilistmikilior1v1.p.rapidapi.com/createAnimeListEntry", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "Anilistmikilior1V1.p.rapidapi.com",
		"x-rapidapi-key": "6ad3457a45msh81bf40bdc86cc3cp1e3611jsnc5a30ea17aa4",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {}
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
}

    render(){
        return(
            <div>
              <h1>
                  Here I want anime stuff
              </h1>
            </div>
        )
    }

}; //closes Class

