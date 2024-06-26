import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCompontent from "@/components/CardCompontent";
import Slider from "@/components/Slider";
import Sbanner from "@/components/Sbanner";
import Sbcard from "@/components/Sbcard";
import OfferBanner from "@/components/OfferBanner";
import FdTable from "@/components/FdTable";
import Cbanner from "@/components/Cbanner";

export default function Home() {
  return (
    <main>
      <Slider />
      <Sbanner />
      <Sbcard />
      <OfferBanner />
      <FdTable />
      <Cbanner />
    </main>
  );
}

{
  /*
const apiUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:4000';
  const [user, setUser] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [updateUser, setUpdateUser] = useState({ id: '', name: '', email: '' });

  // fetch users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users`);
        setUser(response.data.reverse());
      } catch (error) {
        console.error('Error fetching data:', error);

      }
    };
    fetchData();
  }, []);

  //create user
  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/users`, newUser);
      setUser([response.data, ...user]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('error creating user:', error)
    }
  };

  //update user
  const updateUsers = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`${apiUrl}/users/${updateUser.id}`, { name: updateUser.name, email: updateUser.email });
      setUpdateUser({ id: '', name: '', email: '' });
      setUser(
        user.map((use) => {
          if (use.id === parseInt(updateUser.id)) {
            return { ...use, name: updateUser.name, email: updateUser.email }
          }
          return use;
        })
      )
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  //delete user
  const deleteUser = async (userId: number) => {
    try {
      await axios.delete(`${apiUrl}/users/${userId}`);
      setUser(user.filter((use) => use.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

<div className="space-y-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          User Management App
        </h1>
      </div>

         <form onSubmit={createUser} className="p-4 bg-blue-100 rounded shadow">
        <input
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="mb-2 w-full p-2 border border-gray-300 rounded"
        />
        <input
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="mb-2 w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Add User
        </button>
      </form>

      <form onSubmit={updateUsers} className="p-4 bg-green-100 rounded shadow">
        <input
          placeholder="User ID"
          value={updateUser.id}
          onChange={(e) => setUpdateUser({ ...updateUser, id: e.target.value })}
          className="mb-2 w-full p-2 border border-gray-300 rounded"
        />
        <input
          placeholder="New Name"
          value={updateUser.name}
          onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
          className="mb-2 w-full p-2 border border-gray-300 rounded"
        />
        <input
          placeholder="New Email"
          value={updateUser.email}
          onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
          className="mb-2 w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600">
          Update User
        </button>
      </form>

    
      <div className="space-y-2">
        {user.map((user) => (
          <div key={user.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <CardCompontent card={user} />
            <button onClick={() => deleteUser(user.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              Delete User
            </button>
          </div>
        ))}
      </div> */
}
