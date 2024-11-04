import React from 'react';
import './Demo.scss';

//CACH SU DUNG CLASS COMPONENT

 class ChildComponent extends React.Component{

    state = {
        showJobs: false
    }
    
    handleSHowHide = (status) =>{
        this.setState({
            showJobs: !this.state.showJobs
        })
    } 

    handleOnClickDelete = (job) => {
        alert('Click me')
        this.props.deleteAJob(job)
    }
    render(){

        // var name = 'Bùi Như Quỳnh'
        console.log("<<<..>>>> Check props: " , this.props);
        let { name, age , arrJobs} = this.props;
        let {showJobs} = this.state;
        let check = showJobs===true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> Check conditional: ', check);
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

             <div>
                Children Components: {name}-{age}
             </div>
             {showJobs === false ?
             <div>
             <button className='btn-show'
             onClick={() => this.handleSHowHide()}>Show</button>
             </div>
             :
             <>
             <div className='job-lists'>
             {
                arrJobs.map((item, index) => {
                    return(
                        <div key={item.id}>
                            {item.title} - {item.salary} <></> <span
                             onClick={() => this.handleOnClickDelete(item)}>x</span>
                        </div>
                    )
                })
             }   
             </div>
             <div>
             <button onClick={()=> this.handleSHowHide()}>Hide</button>
             </div>
             </>
             }
            </>
        )
    }
}

// CACH SU DUNG FUNCTION COMPONENTs

// const ChildComponent = (props) =>{
//     let {arrJobs} = props;
//     return(
//         <div>
//              <div className='job-lists'>
//              {
//                 arrJobs.map((item, index) => {
//                     return(
//                         <div key={item.id}>
//                             {item.title} - {item.salary}
//                         </div>
//                     )
//                 })
//              }   
//              </div>
//         </div>
//     )
// }

export default ChildComponent;
