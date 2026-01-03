// import Popup from "./components/Popup";
import Filters from "./components/Filters";
import UserCard from "./components/UserCard";
import AddUserBtn from "./components/AddUserBtn";
import FormPopup from "./components/FormPopup";

const USERS = [
  {
    id: 1,
    fname: "Aria",
    lname: "Zavala",
    email: "aria.z@nexus.io",
    age: 24,
    role: "Admin",
    isFriend: true,
    mutual: "Sarah Jenkins",
    joinedAgo: 12,
  },
  {
    id: 2,
    fname: "Julian",
    lname: "Vance",
    email: "vance@cloud.com",
    age: 31,
    role: "Editor",
    isFriend: false,
    mutual: "None",
    joinedAgo: 15,
  },
  {
    id: 3,
    fname: "Elena",
    lname: "Kross",
    email: "kross@void.net",
    age: 29,
    role: "User",
    isFriend: true,
    mutual: "Alex Rivera",
    joinedAgo: 27,
  },
  {
    id: 4,
    fname: "Marcus",
    lname: "Thorne",
    email: "thorne@dark.dev",
    age: 45,
    role: "Guest",
    isFriend: false,
    mutual: "None",
    joinedAgo: 33,
  },
  {
    id: 5,
    fname: "Sasha",
    lname: "Grey",
    email: "sasha@purple.org",
    age: 22,
    role: "User",
    isFriend: true,
    mutual: "Julian Vance",
    joinedAgo: 54,
  },
  {
    id: 6,
    fname: "Victor",
    lname: "Doom",
    email: "v.doom@latveria.gov",
    age: 38,
    role: "Admin",
    isFriend: false,
    mutual: "None",
    joinedAgo: 67,
  },
];

export default function UserManagementUI() {
  return (
    <div className="min-h-screen bg-[#030308] text-slate-200 font-sans selection:bg-purple-500/30">
      <main className="max-w-7xl mx-auto p-6 md:p-10">
        <Filters />
        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {USERS.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      <AddUserBtn />
      <FormPopup />
    </div>
  );
}
