import { useState } from "react";

let initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, handleButton }) {
  return (
    <button className="button" onClick={handleButton}>
      {children}
    </button>
  );
}
////////////
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showFriend, setShowFriend] = useState(false);
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  function handleShowFriend() {
    setShowFriend((val) => !val);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Friends friend={friends} />
        {showFriend && (
          <AddFriend
            onAddFriend={handleAddFriend}
            onSetFriend={setShowFriend}
          />
        )}
        <Button handleButton={handleShowFriend}>
          {showFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <Bill />
      {/* <Close /> */}
    </div>
  );
}

function Friends({ friend }) {
  return (
    <ul>
      {friend.map((data) => (
        <Friend friend={data} key={data.id} />
      ))}
    </ul>
  );
}
function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      <p>
        {friend.balance > 0 ? (
          <p className="green">
            {friend.name} owe you ${friend.balance}
          </p>
        ) : friend.balance === 0 ? (
          <p>You and {friend.name} are clear</p>
        ) : (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
      </p>
      <Button>Select</Button>
    </li>
  );
}

function AddFriend({ onAddFriend, onSetFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleAdd(e) {
    const id = crypto.randomUUID();
    e.preventDefault();

    if (!name || !image) return;
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    onSetFriend(false);

    // console.log(newFriend);
  }
  return (
    <form className="form-add-friend" onSubmit={handleAdd}>
      <label>🤝Friend</label>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>🖼️Image URL</label>
      <input
        type="text"
        placeholder="www.image.com"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <Button>Add</Button>
    </form>
  );
}

function Bill({}) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💵Bill value</label>
      <input type="text" value="" onChange=""></input>
      <label>💶Your expenses</label>
      <input type="text" value="" onChange=""></input>
      <label>💷X's expenses</label>
      <input type="text" value="" onChange="" disabled></input>
      <label>💸who is paying the bill?</label>
      <select type="text" value="" onChange="">
        <option value="">You</option>
        <option value="">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
// function Close() {
//   return (
//     <div>
//       <button onClick="">Close</button>
//     </div>
//   );
// }
