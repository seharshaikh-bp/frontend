 import React ,{useState} from 'react';

 function AddColumn(props){
    const [showNewColumnButton, setshowNewColumnButton] = useState(true);
    const [value, setValue] = useState("");

    function handleInputComplete(){
        setshowNewColumnButton(true);
        addNewColumn(value);
        setValue("");
    }

    function addNewColumn(title){
        const newColumnOrder = Array.from(props.board.columnOrder);
        const newColumnId = 'column-' + Math.floor(Math.random() * 1000000);
        newColumnOrder.push(newColumnId);
        
        const newColumn = {
            id: newColumnId,
            title: title,
            taskIds: [],
        };  

        props.setBoard({
            ...props.board,
            columns: {
                ...props.board.columns,
                [newColumnId]: newColumn
            },
            columnOrder: newColumnOrder
        });
    }
    return(
        <div>
        {
            showNewColumnButton ?
            <button onClick={() => setshowNewColumnButton(false)}>New Column</button>:
            <input type="text" value={value} onChange={e => setValue(e.target.value)} onBlur={handleInputComplete}/>
        }
        </div>
    )
 }



 export default AddColumn;