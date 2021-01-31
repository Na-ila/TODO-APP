import React, {useState, createContext} from 'react';


export const Context = createContext();

export const Provider = props => {

    const [getState, setState] = useState({
        task: '',
        editedTask: '',
        list: [],
        isMenu: false,
        itemKey: '',
        isEditor: false,
        isHeaderMenu: false,
        doneList: [],
        isDoneList: false,
        archiveList: [],
        isArchiveList: false,
        isHome: true
    });

    return (
        <Context.Provider value={[getState, setState]}>
            {props.children}
        </Context.Provider>
    );
}
