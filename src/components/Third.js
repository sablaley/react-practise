import { Component } from "react";
class Third extends Component {
    constructor() {
        super()
        this.state = {
            monsters: [],
            searchString: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((result) => this.setState(
                () => {
                    this.setState({ monsters: result })
                },
                // () => {
                //     console.log(this.state);
                // }
            ))
        // .then((res)=>this.setState({users:res}))
    }

    onSearchChange = (event) => {
        // console.log({startingArray:this.state.monsters});

        const searchString = event.target.value.toLowerCase()
        // console.log("run",event);
        
        this.setState(
            () => {
                return { searchString: searchString }
            },
            // () => {
            // console.log({endingArray: this.state.monsters});

            // }
        )
    }

    render() {
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(this.state.searchString)
        })
        // console.log(filteredMonster);           
        return (
            <>
                <input type="search" placeholder="search monsters" onChange={this.onSearchChange} />
                {
                    filteredMonsters.map((monster, index) => {
                        return (
                            <h6 key={monster.id}>{monster.name}</h6>
                        )
                    })
                }
            </>
        )
    }
}
export default Third