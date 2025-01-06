import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handlePlayerNameChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name"> {playerName} </span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handlePlayerNameChange} />;
    buttonCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleEditClick}> {buttonCaption} </button>
    </li>
  );
}
