const PersonForm = ({
    onSubmit,
    setNewName,
    setNewNumber,
    newNumber,
    newName,
  }) => (
    <>
      <form onSubmit={onSubmit}>
        <div>
          Name: <input 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Type name"></input>
        </div>
        <div>
          Number: <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            placeholder="Type number"

          ></input>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );

  export default PersonForm