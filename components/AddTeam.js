import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import './AddTeam.css';

const AddTeam = () => {
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState([{ name: '', email: '' }, { name: '', email: '' }, { name: '', email: '' }]); // Initial state with 3 members

  useEffect(() => {
    // Ensure at least 3 members are always present
    if (members.length < 3) {
      setMembers([...members, { name: '', email: '' }]);
    }
  }, [members]); // Update effect when members change

  const handleAddMember = () => {
    setMembers([...members, { name: '', email: '' }]);
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Team Name:', teamName);
    console.log('Members:', members);
    // Navigate to success or next step
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>
          <MDBCardBody className='px-4'>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Add Team</h3>
            <MDBRow>
              <MDBCol md='12'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Team Name'
                  size='lg'
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  onFocus={(e) => e.target.placeholder = ''}
                  onBlur={(e) => e.target.placeholder = 'Team Name'}
                />
              </MDBCol>
            </MDBRow>
            {members.map((member, index) => (
              <React.Fragment key={index}>
                <MDBRow className='mb-1'>
                  <MDBCol md='12'>
                    <p className="fw-bold mb-2">Member {index + 1} Details:</p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className='mb-3'>
                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-3'
                      label='Name'
                      size='lg'
                      value={member.name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                      onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'Name'}
                    />
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-3'
                      label='Email ID'
                      size='lg'
                      value={member.email}
                      onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                      onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'Email ID'}
                    />
                  </MDBCol>
                </MDBRow>
              </React.Fragment>
            ))}
            <MDBBtn size='sm' className='float-end mb-3' onClick={handleAddMember}>Add Member</MDBBtn>
            <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Submit</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddTeam;
