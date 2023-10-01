const initialFriends = [
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

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Friends />
        <AddFriend />
        <Button>Add friend</Button>
      </div>
      <Bill />
      {/* <Close /> */}
    </div>
  );
}

function Friends() {
  return (
    <ul>
      {initialFriends.map((data) => (
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

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function AddFriend() {
  return (
    <form className="form-add-friend">
      <label>🤝Friend</label>
      <input type="text" value="" onChange=""></input>

      <label>🖼️Image URL</label>
      <input type="text" value="" onChange=""></input>
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
