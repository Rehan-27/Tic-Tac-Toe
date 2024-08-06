import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onNameChange }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)


    function handleEdit() {
        setIsEditing(editing => !editing);
        if (isEditing) {
            onNameChange(symbol, playerName);
        }
    }

    function handleChangeName(event) {
        setPlayerName(event.target.value);
    }

    let player = <span className="player-name">{playerName}</span>

    if (isEditing) {
        player = <input type="text" required value={playerName} onChange={handleChangeName} />
    }

    return (
        <li className={isActive ? 'active' : undefined} >
            <span className="player">
                {player}
                <span className="player-symbol" >{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}