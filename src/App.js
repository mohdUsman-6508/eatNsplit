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
      </div>
      {/* <Bill /> */}
      {/* <Add /> */}
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
      <button className="button" onClick="">
        Select
      </button>
    </li>
  );
}

// function Bill({ name }) {
//   return (
//     <div>
//       <h1>SPLIT A BILL WITH {name}</h1>
//       <form>
//         <label>bill value</label>
//         <input type="text" value="" onChange=""></input>
//         <label>your expenses</label>
//         <input type="text" value="" onChange=""></input>
//         <label>{name}'s expenses</label>
//         <input type="text" value="" onChange=""></input>
//         <label>who is paying the bill?</label>
//         <select type="text" value="" onChange="">
//           <option value="">You</option>
//           <option value="">{name}</option>
//         </select>
//         <button onClick="">split bill</button>
//       </form>
//     </div>
//   );
// }

// function Add() {
//   return (
//     <div>
//       <form>
//         <label>Friend name</label>
//         <input type="text" value="" onChange=""></input>
//         <label>Image URL</label>
//         <input type="text" value="" onChange=""></input>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// // }
// function Close() {
//   return (
//     <div>
//       <button onClick="">Close</button>
//     </div>
//   );
// }
