const List = () => {
    const items = ["react","java", "python", "angular"];
    return (
        <div>
            <p>Most popular course names</p>
            {/* <ul>
                <li>{items[0]}</li>
                <li>{items[1]}</li>
                <li>{items[2]}</li>
                <li>{items[3]}</li>
            </ul> */}
            <ul>
                {items.map((item) => {
                    return <li>{item}</li>;
                })}
            </ul>
        </div>
    ); 
};

export default List;

