const MoveList = ({moves}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Move</th>
                        <th>Player</th>
                        <th>Cell</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        moves.map((move, index)=>(
                            <th>
                                <td>{index+1}</td>
                                <td>{move.player}</td>
                                <td>{move.position}</td>
                            </th>
                        ))
                    } 
                </tbody>
            </table>
        </div>
    )
}

export default MoveList;