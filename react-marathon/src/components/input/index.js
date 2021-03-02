import s from './style.module.css';

const Input = ({type = 'text', value, name, label, onChange, required}) => {
    return (
        <div className={s.root}>
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                required={required}
                className={s.input}
            />
            <span className={s.highlight}/>
            <span className={s.bar}/>
            <label className={s.label}>{label}</label>
        </div>
    );
};

export default Input;
