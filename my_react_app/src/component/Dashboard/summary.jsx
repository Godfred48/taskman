const Summary= () => {
    return ( 
        <div className="summary">
            <section className="Total">
                <h3>Total task</h3>
            </section>
            <section className="completed">
                <h3>Completed task</h3>
            </section>
            <section className="uncompleted">
                <h3>Uncompleted task</h3>
            </section>
            <section className="pending">
                <h3>Pending task</h3>
            </section>
        </div>
     );
}
 
export default Summary;