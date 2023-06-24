import {AiOutlinePlus} from 'react-icons/ai'
import {MdEdit} from 'react-icons/md';

const TaskList = props =>{
    
    const { listDetails } = props;
    const {taskName, date, time, assignUser} = listDetails
    
        return(
            <li>
                <div className="add-new-task-container">
                    <p className='task'>Tasks</p>
                    <hr className="hr-line" />
                    <button className='plus-button' onClick={this.onClickPlus}>
                        <AiOutlinePlus size={12} className='plus-icon' />
                    </button>
                </div>
                <div>
                    <div>
                        <p>{taskName[0]}</p>
                        <p>{taskName}</p>
                        <p>{assignUser}</p>
                        <div>
                            <p>{date}</p>
                            <p>{time}</p>
                        </div>
                    </div>
                    <MdEdit size={15} />
                </div>
            </li>
        )
   
}

export default TaskList