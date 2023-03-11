function CompletedTodo (props) {
    return(
        <div className="todo completedTodo">
            <p className="">
                <del>
                    {props.data.title}
                </del>
            </p>
        </div>
    )
}
export default CompletedTodo