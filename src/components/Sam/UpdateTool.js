import React, { useEffect, useState } from 'react';
import AxiosWithAuth from '../../utils/AxiosWithAuth';
import { connect } from 'react-redux';
import { fetchTools, updateTool } from '../../utils/actions';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin: 0 auto;    
    display: flex;
    flex-direction: column;
    align-items:center;
`
const NameInput = styled.input`
    height: 3rem;
    width: 18rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    border: 1px solid #4e4e4e;
    color: #696969;
`
const OtherInput = styled.input`
    height: 3rem;
    width: 18rem;
    margin: 1rem 0;
    font-size: 1.4rem;
    border: 1px solid #4e4e4e;
    color: #696969;
`

const TopLabel = styled.label`
    margin-top: 1rem;
    font-size: 1.5rem;
`

const Label = styled.label`
    font-size: 1.5rem;
`

const Button = styled.button`
    width: 14rem;
    height: 3rem;
    margin: 3rem 0;
    border-radius: 5px;
    background: #73A85A;
    color: white;
    font-size: 1rem;
    font-weight: bold;

    :hover {
        background: white;
        color: #73A85A;
        border: 1px solid #73A85A;
    }
`

const ReturnButton = styled.button`
    width: 14rem;
    height: 3rem;
    margin-bottom: 3rem;
    border-radius: 5px;
    background: #73A85A;
    color: white;
    font-size: 1rem;
    font-weight: bold;

    :hover {
        background: white;
        color: #73A85A;
        border: 1px solid #73A85A;
    }
`

const UpdateTool = props => {
    const [tool, setTool] = useState({
        id: '',
        Name: '',
        Price: '',
        Image: '',
        Owner: '',
        Location: ''
    })

    const userId = localStorage.getItem('userId');
    const toolId = props.match.params.id;

    useEffect(() => {
        AxiosWithAuth()
        .get(`/tools`)
        .then(res => {
            const findTool = res.data.find((item) => (item.id === Number(toolId)))
            console.log('Find Tool', findTool);
            setTool(findTool);
        })
    }, [])
    
    const handleChanges = e => {
        setTool({ ...tool, [e.target.name]: e.target.value });
    }

    const submitChanges = e => {
        const updatedTool = {
            name: tool.Name,
            price: tool.Price
        }
        e.preventDefault();
        props.updateTool(updatedTool, toolId);
        alert(`Updated information for ${tool.Name}`);
        props.history.push(`/user/${userId}`)
    }

    if (!tool) {
        return (
            <p>Updating Tool Information...</p>
        )
    } else {
        return (
            <div>
                <StyledForm onSubmit={submitChanges}>
                    <TopLabel>Name:</TopLabel>
                    <NameInput type="text" name="Name" value={tool.Name} onChange={handleChanges} />
                    <Label>Price:</Label>
                    <OtherInput type="text" name="Price" value={tool.Price} onChange={handleChanges} />
                    <Button>Update</Button>
                    <ReturnButton onClick={() => props.history.push(`/user/${userId}`)}>Return To Profile</ReturnButton>
                </StyledForm>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tools: state.tools,
        isUpdating: state.isUpdating
    }
}

export default connect(mapStateToProps, { fetchTools, updateTool })(UpdateTool);