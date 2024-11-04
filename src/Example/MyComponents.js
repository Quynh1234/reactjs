import React from 'react';
import ChildComponent from './ChildComponents';
import AddComponents from './AddComponents';
class MyComponent extends React.Component{

    state ={
        // name: 'Quynh',
        // channel: 'BNQVlog'
       
        arrJobs: [
            {id: 'ab1', title:'intern', salary: '500$'},
            {id: 'ab2', title:'tester', salary: '500$'},
            {id: 'ab3', title:'leader', salary: '500$'}
        ]
    }
    
    // handleOnChangename = (e) =>{
    //     this.setState({
    //          name: e.target.value
    //     })
    // }

    // handleClickButton = () => {
    //     alert('Click me!')
    // }
    addNewJob = (job) =>{
        console.log('check job from parent: ', job)
        let currentJob = this.state.arrJobs;
        currentJob.push(job);
        this.setState({
            // arrJobs: [...this.state.arrJobs, job]
            arrJobs: currentJob
        })
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs : currentJob
        })
    }
    render(){

        // var name = 'Bùi Như Quỳnh'
        console.log("<<<..>>>> call render: " , this.state)
        return(
            <>
               {/* <div className='fisrt'> 
                    {console.log('My name is: ' ,name)}
                    <input value={this.state.name} type ="text"
                        onChange={(e)=>this.handleOnChangename(e)}
                    />
                    Helllo Baby, My name is {this.state.name}
                </div>
                <div className='second'> 
                    I love you! My channel is {this.state.channel}
                </div>
                <div>
                     <button onClick={() => this.handleClickButton()}>Click Me</button>
                </div> */}

                <AddComponents
                    addNewJob = {this.addNewJob}
                />
                    
                

                <ChildComponent 
                // name={'BNQ'}
                // age={'21'}
                arrJobs = {this.state.arrJobs}

                />
               
            </>
        )
    }
}

export default MyComponent;
