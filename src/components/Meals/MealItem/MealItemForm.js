import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    // const amountInputRef = useRef();

    const submitHandler = event => {
        event.prevenDefault();

        // const enteredAmount = amountInputRef.current.value;
        // const enteredAmountNumber = +enteredAmount;

        // if (enteredAmount.trim().length === 0 || enteredAmount < 1 ) {
        //     return;
        // }

    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" input={{
            // ref: {amountInputRef0},
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }} />
        <button>+ Add</button>
    </form>
};

export default MealItemForm;