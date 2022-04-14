import React, {useState, useRef} from 'react';

import Card from '../UI/Card';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;

        if(!name || !age) {
            setError({
                'title': 'Invalid input',
                'message': 'All the fields are required'
            });
            return;
        }

        if(+age < 1) {
            setError({
                'title': 'Invalid age',
                'message': 'The age must be greater than 0'
            });
            return;
        }

        props.onAddUser(name, age);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                {/* Con ref puedo apuntar y obtener un elemento DOM completo. De esta manera es bastante util apuntar a los inputs para luego obtener
                el valor de los mismos cuando se envie el formulario y no usando un onChange, eso es mucho menos eficaz.
                Por otro lado, al usar ref el componente se convierte en un componente sin control (Uncontrolled component) esto porque el control
                del mismo ya no está dado por el desarrollador por medio de React, sino que en este caso está dado por el usuario debido a que este cambiará el valor del input cuando escriba. Si
                usaramos useState si seria controlado porque lo controlariamos mediante react usando los estados*/}
                <input id='username' type='text' ref={nameInputRef}></input>
                <label htmlFor='age'>Age (years)</label>
                <input id='age' type='number' ref={ageInputRef}></input>
                <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </Wrapper>
    )
};

export default AddUser;