import { useState } from "react";

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [dogName, setDogName] = useState("");
  const [dogType, setDogType] = useState("");

  const [editingDog, setEditingDog] = useState({ name: "", type: "" });

  function createDog(e) {
    e.preventDefault();
    const newDog = { name: dogName, type: dogType };
    setDogs([...dogs, newDog]);

    setDogName("");
    setDogType("");
  }

  function updateDog(e, dogToUpdate) {
    e.preventDefault();
    const index = dogs.indexOf(dogToUpdate);
    const updatedDogs = [...dogs];
    updatedDogs[index] = editingDog;
    setDogs(updatedDogs);

    setEditingDog({ name: "", type: "" });
  }

  function deleteDog(dogToDelete) {
    const index = dogs.findIndex((dog) => dog.name === dogToDelete.name);
    const updatedDogs = [...dogs];
    updatedDogs.splice(index, 1);
    setDogs(updatedDogs);
  }

  return (
    <>
      <div>
        <h1>Dogs</h1>
      </div>
      <form onSubmit={(e) => createDog(e)}>
        <input
          type="text"
          value={dogName}
          placeholder="Name"
          onChange={(e) => setDogName(e.target.value)}
        />
        <input
          type="text"
          value={dogType}
          placeholder="Breed"
          onChange={(e) => setDogType(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            {dog.name} is a {dog.type}
            <form onSubmit={(e) => updateDog(e, dog)}>
              <input
                type="text"
                name="name"
                value={editingDog.name}
                placeholder="Update Name"
                onChange={(e) =>
                  setEditingDog({
                    ...editingDog,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                name="type"
                value={editingDog.type}
                placeholder="Update Breed"
                onChange={(e) =>
                  setEditingDog({
                    ...editingDog,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input type="submit" value="Update" />
              <button onClick={deleteDog}>Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}
