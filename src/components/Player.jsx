import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handlePlayerNameChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name"> {playerName} </span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerNameChange}
      />
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleEditClick}> {buttonCaption} </button>
    </li>
  );
}
