import s from './Layout.module.css';

const Layout = (props) => {
    return (
        <section className={s.root} id={props.id}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            {props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`} >
                        <p>dasd
                            {props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
