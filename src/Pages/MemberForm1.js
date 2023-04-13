import React, { useState, useEffect } from "react";
import MemberTable from "../MemberTables/MemberTable";
import { Formik, input, Form, ErrorMessage, useFormik } from "formik";

const MemberForm1 = () => {
  const initialFormState = {
    id: null,
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    mobilenumber: "",
  };

  const [currentMember, setCurrentMember] = useState(initialFormState);
  const [members, setMembers] = useState([]);
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentMember({ ...currentMember, [name]: value });
  };

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const editRow = (member) => {
    setEditing(true);
    setCurrentMember(member);
    formik.setValues(member);
  };

  const updateMember = (updatedMember) => {
    setEditing(false);
    setMembers(
      members.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
    setCurrentMember(initialFormState);
  };

  const validate = (values) => {
    const errors = {};
  
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    }
  
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email format";
    }
  
    if (!values.address) {
      errors.address = "Address is required";
    } else if (values.address.length < 10) {
      errors.address = "Address must be at least 10 characters long";
    }
  
    if (!values.state) {
      errors.state = "State is required";
    }
  
    if (!values.zipcode) {
      errors.zipcode = "Zip code is required";
    } else if (!/^\d{5}$/.test(values.zipcode)) {
      errors.zipcode = "Zip code must be 5 digits long";
    }
  
    if (!values.mobilenumber) {
      errors.mobilenumber = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(values.mobilenumber)) {
      errors.mobilenumber = "Invalid mobile number format";
    }
  
    return errors;
  };
  
  const formik = useFormik({
    initialValues: initialFormState,
    validate,
    onSubmit: (values, { resetForm }) => {
      if (editing) {
        updateMember(values);
      } else {
        const newMember = { ...values, id: members.length + 1 };
        setMembers([...members, newMember]);
        resetForm(initialFormState);
      }
      setCurrentMember(initialFormState);
    },
  });

  return (
    <div className="container">
      <div className="row">
        <h3>Welcome to Library Management !!!</h3>
        <div className="col-12 col-md-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="address">Address</label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-danger">{formik.errors.address}</div>
              ) : null}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="city">City</label>
              <input
                className="form-control"
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.city && formik.errors.city ? (
                <div className="text-danger">{formik.errors.city}</div>
              ) : null}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="text-danger">{formik.errors.state}</div>
              ) : null}
            </div>

            <div className="form-group mt-2">
              <label htmlFor="zipcode">ZipCode</label>
              <input
                type="number"
                className="form-control"
                id="zipcode"
                name="zipcode"
                value={formik.values.zipcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.zipcode && formik.errors.zipcode ? (
                <div className="text-danger">{formik.errors.zipcode}</div>
              ) : null}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="mobilenumber">Mobile Number</label>
              <input
                type="number"
                className="form-control"
                id="mobilenumber"
                name="mobilenumber"
                value={formik.values.mobilenumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mobilenumber && formik.errors.mobilenumber ? (
                <div className="text-danger">{formik.errors.mobilenumber}</div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              {editing ? "Update" : "Add"}
            </button>
            {editing && (
              <button
                type="button"
                className="btn btn-secondary ml-3"
                onClick={() => {
                  setEditing(false);
                  setCurrentMember(initialFormState);
                }}
              >
                Cancel
              </button>
            )}
          </form>
        </div>
      </div>
      <MemberTable
        members={members}
        deleteMember={deleteMember}
        editRow={editRow}
      />
    </div>
  );
};
export default MemberForm1;
