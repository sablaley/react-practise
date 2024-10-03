import {Component} from 'react'
class Second extends Component {
    constructor() {
        super()
        this.state = {
            Monsters:[
                {
                    name:"Linda"
                },
                {
                    name:"Jack"
                },
                {
                    name:"Frank"
                }
            ]
        }
        
    }
    render() {
        return (
            <>
                {
                    this.state.Monsters.map((monster,index)=>{
                        return (
                            <h5 key={index} style={{backgroundColor:"cyan",padding:"10px 20px"}}>{monster.name}</h5>
                        )
                    })
                }
            </>
        )
    }
}
export default Second