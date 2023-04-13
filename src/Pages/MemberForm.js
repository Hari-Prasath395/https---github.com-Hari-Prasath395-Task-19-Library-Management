// import React, { useState, useEffect } from "react";
// import MemberTable from "../MemberTables/MemberTable";
// import { Formik } from "formik";

// const MemberForm = () => {
//   const initialformSate = {
//     id: null,
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     mobilenumber: "",
//   };
//   const [currentMember, setCurrentMember] = useState(initialformSate);
//   const [members, setMembers] = useState([]);
//   const [editing, setEditing] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentMember({ ...currentMember, [name]: value });
//   };

//   const addMember = () => {
//     if (
//       !currentMember.name ||
//       !currentMember.email ||
//       !currentMember.address ||
//       !currentMember.city ||
//       !currentMember.state ||
//       !currentMember.zipcode ||
//       !currentMember.mobilenumber
//     )
//       return;

//     const member = { ...currentMember, id: members.length + 1 };
//     setMembers([...members, member]);
//     setCurrentMember(initialformSate);
//     localStorage.setItem("members", JSON.stringify([...members, member]));
//   };

//   useEffect(() => {
//     const savedMembers = JSON.parse(localStorage.getItem("members"));
//     if (savedMembers) {
//       setMembers(savedMembers);
//     }
//   }, []);

//   const savedMemberData = JSON.parse(localStorage.getItem("members"));

//   const deleteMember = (id) => {
//     setMembers(members.filter((member) => member.id !== id));
//     localStorage.setItem(
//       "members",
//       JSON.stringify(members.filter((member) => member.id !== id))
//     );
//   };

//   const editRow = (member) => {
//     setEditing(true);
//     setCurrentMember({
//       id: member.id,
//       name: member.name,
//       email: member.email,
//       address: member.address,
//       city: member.city,
//       state: member.state,
//       zipcode: member.zipcode,
//       mobilenumber: member.mobilenumber,
//     });
//   };

//   const updateMember = (id, updatedMember) => {
//     setEditing(false);
//     setMembers(
//       members.map((member) => (member.id === id ? updatedMember : member))
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !currentMember.name ||
//       !currentMember.email ||
//       !currentMember.address ||
//       !currentMember.city ||
//       !currentMember.state ||
//       !currentMember.zipcode ||
//       !currentMember.mobilenumber
//     )
//       return;
//     if (editing) {
//       updateMember(currentMember.id, currentMember);
//     } else {
//       addMember();
//     }
//   };
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-12 col-md-4">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={currentMember.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 onChange={handleInputChange}
//                 value={currentMember.email}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="address">Address</label>
//               <textarea
//                 className="form-control"
//                 id="address"
//                 name="address"
//                 onChange={handleInputChange}
//                 value={currentMember.address}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="city">City</label>
//               <select
//                 className="form-select form-select mb-3"
//                 aria-label=".form-select-lg example"
//                 name="city"
//                 onChange={handleInputChange}
//                 value={currentMember.city}
//               >
//                 <option value="" selected>
//                   Select City
//                 </option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="state">State</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="state"
//                 name="state"
//                 onChange={handleInputChange}
//                 value={currentMember.state}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="zipcode">ZipCode</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="zipcode"
//                 name="zipcode"
//                 onChange={handleInputChange}
//                 value={currentMember.zipcode}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="mobilenumber">Mobile Number</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="mobilenumber"
//                 name="mobilenumber"
//                 onChange={handleInputChange}
//                 value={currentMember.mobilenumber}
//               />
//             </div>
//             <button className="btn btn-outline-primary mt-3" type="submit">
//               {editing ? "Update" : "Save"}
//             </button>
//             {editing && (
//               <button
//                 type="button"
//                 className="btn btn-warning mt-3 ml-3 mx-3"
//                 onClick={() => setEditing(false)}
//               >
//                 Cancel
//               </button>
//             )}
//           </form>
//         </div>
//       </div>

//       <MemberTable
//         members={members}
//         deleteMember={deleteMember}
//         editRow={editRow}
//       />
//     </div>
//   );
// };
// export default MemberForm;
