import React from 'react'

export default function MemberTable(props) {
    const { members } = props;
    return (
      <div className='table-responsive'>
        <h4 className='student-table-header mt-3'>Member's Table</h4>
        <table className="table table-striped table-bordered text-center mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>ZipCode</th>
              <th>M-Number</th>
              <th>Actions</th>
            </tr>
          </thead>
  
          <tbody>
            {members.length > 0 ? (
              members.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td className="col-2">{member.email}</td>
                  <td className="col-2">{member.address}</td>
                  <td >{member.city}</td>
                  <td >{member.state}</td>
                  <td >{member.zipcode}</td>
                  <td >{member.mobilenumber}</td>
              
                  <td>
                    <button
                      onClick={() => {
                        props.editRow(member);
                      }}
                      className="btn btn-outline-primary  mx-3"
                    ><i class="bi bi-pencil-square"></i>
                    </button>
                    <button
                      onClick={() => props.deleteMember(member.id)}
                      className="btn btn-outline-danger  mx-3"
                    >
                    <i class="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Student Found</td>
              </tr>
            )}
          </tbody>
        </table>
        <p></p>
      </div>
    );
}
