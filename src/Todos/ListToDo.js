import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component{

    state = {
        listTodos: [
            {id: 'todo1' , title: 'Doing HomeWork'},
            {id: 'todo2' , title: 'Learn ReactJS'},
            {id: 'todo3' , title: 'Learn English'}, // Đổi id 'todo1' thành 'todo3' để tránh trùng id
        ],
        editTodo: []
    }

    addNewToDo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        });
        // Gọi toast.success khi thêm thành công
        toast.success("Todo added successfully!");
    }

    handleDeleteToDo = (todo) => {
         let currentTodos = this.state.listTodos;
         currentTodos = currentTodos.filter(item => item.id !== todo.id);
         this.setState({
            listTodos: currentTodos
         })
         toast.success("Delete success!");
    }
    handleEditToDo =(todo) => {

        // Save
        let {editTodo, listTodos} = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        if(isEmpty === false && editTodo.id === todo.id){
            let listTodoCopy = [...listTodos];

            let objectIndex = listTodoCopy.findIndex((item => item.id === todo.id));

            listTodoCopy[objectIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
                
            })
            toast.success('Edit success!')
            return;
        }
        
        //edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangEditToDo = (event) => {
        let editToDoCopy = {...this.state.editTodo};
        editToDoCopy.title = event.target.value
        this.setState({
             editTodo: editToDoCopy
        })
    }

    render(){
        let {listTodos, editTodo} = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        console.log('>>> check empty: ', isEmpty);
        return (
            <div className="list-todo-container">
               <AddToDo addNewToDo={this.addNewToDo} />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                {isEmpty === true ?
                                    <span>{index + 1} - {item.title}</span>
                                    :
                                    <>
                                    {editTodo.id === item.id ?
                                    <span>
                                        {index+1} - <input value={editTodo.title}
                                        onChange={(event) => this.handleOnChangEditToDo(event)}
                                        ></input>
                                    </span>
                                    :
                                    <span>{index + 1} - {item.title}</span>
                                    }
                                    </>
                                } 
                                    <button className="edit"
                                    onClick={(todo) => this.handleEditToDo(item)}
                                    >
                                    {isEmpty === false && editTodo.id === item.id ?
                                    'Save' : 'Edit'
                                    }
                                    </button>
                                    <button className="delete"
                                    onClick={() => this.handleDeleteToDo(item)}
                                    >Delete</button>
                                
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListToDo;
