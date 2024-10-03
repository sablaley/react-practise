import React, { Component } from 'react'

class One extends Component {
    constructor() {
        super()
        this.state = {
            name: "Yihua",
            marks: { grade: "C", course: "Banking" }
        }
    }
    render() {
        // console.log(this.state);

        return (
            <div>
                <p>Hi, {this.state.name}</p>
                <button onClick={() => {
                    this.setState({ name: "Andrie" })
                    console.log(this.state)
                }}>Change Name</button><br /><br />

                <p>Your course is {this.state.marks.grade} of {this.state.marks.course}</p>
                <button onClick={() => {
                    this.setState({ marks: { grade: "D", course: "IT" } })
                    console.log(this.state);                  
                }}>Change Marks and Course Name with print old states in Console</button>

                <p>Your course is {this.state.marks.grade} of {this.state.marks.course}</p>
                <button onClick={
                    () => {this.setState(
                        ()=>{
                            return {
                                marks: { grade: "D", course: "IT" } 
                            }
                        },
                        ()=>{
                            console.log(this.state);                           
                        }
                    )
        }}>Change Marks and Course Name in Console with updated states</button>
      </div >
    )
    }
}

export default One
