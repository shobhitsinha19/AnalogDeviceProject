import React, { useEffect, useState } from "react";
import { Navbar, Table, Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { addSingleUser, loadSingleUser, loadUsers } from './redux/actions';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const initialState = {
    username: "",
    name: "",
    location: "",
    followers: "",
    repositories: "",
  };

  
const Home = () => {
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();
    const {users, user} = useSelector(state => state.data);
    const [userName, setUserName] = useState('');
    const { SearchBar } = Search;

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    useEffect(() => {
        if (user) {
          setState({ ...user });
        }
    }, [user]);

    const handleRepoShow = (id) => {
    	console.log(id)
        dispatch(loadSingleUser(id));
        
    };

    const handleAddUserName = () => {
        dispatch(addSingleUser(userName))
    };

    const linkRepositoryButton = (cell, row, rowIndex, formatExtraData) => {
        return (
            <ButtonGroup>
            <Button
                style={{ marginRight: "5px" ,backgroundColor: '#f1356d' }}
                variant="primary"
                onClick={() => handleRepoShow(row._id)}
            >
                Repositories
            </Button>
        </ButtonGroup>
        );
      };
      
    const columns = [{
    dataField: 'index',
    text: 'No.',
    sort: true

    }, {
    dataField: 'username',
    text: 'UserName',
    sort: true

    },{
    dataField: 'name',
    text: 'Name',
    sort: true

    }, {
    dataField: 'location',
    text: 'Location',
    sort: true

    }, {
    dataField: 'followers',
    text: 'Followers',
    sort: true

    },{
    dataField: 'action',
    text: 'Action',
    formatter: linkRepositoryButton
    }
    ];


    var userTableData =  users.map((item, index) => ({
        index: index+1,
        username: item.username,
        name: item.name,
        location: item.location,
        followers: item.followers,
        _id: item.username
    }));
    

    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand>Shobhit Sinha GitHub Full-Stack Application</Navbar.Brand>
            </Navbar>
            <Container style={{ marginTop: "70px" }}>

                <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={10}>
                 

                    </Col>
                </Row>

               
 
                <Row>
                <ToolkitProvider
				  keyField="index"
				  data={ userTableData }
				  columns={ columns }
				  search
				>

				  {
				    props => (
				      <div>
				        <SearchBar { ...props.searchProps } srText = "" />
				        <form style={{float: 'right'}} onSubmit={handleAddUserName}>
		                    <input type= "text"  style={{marginRight: '10px'}} placeholder="Enter username" value = {userName} onChange={(e) => setUserName(e.target.value)}/>
		                    <Button variant="primary" style={{backgroundColor: '#f1356d'}}
		                        onClick={handleAddUserName}>
		                    Add Username</Button>{' '}
		            </form>
				        <hr />
				        <BootstrapTable { ...props.baseProps } pagination={ paginationFactory() }/>
				      </div>
				    )
				  }
				</ToolkitProvider>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
					     { <Table bordered hover>
					        <thead>
					            <tr>
					                <th>No.</th>
					                <th>Repositories</th>
					            </tr>
					        </thead>
					        {user && user.repositories &&
					            user.repositories.map((item, index) => (
					                <tbody key={index}>
					                    <tr>
					                        <td>{index + 1}</td>
					                        <td>{item}</td>
					                    </tr>
					                </tbody>
					            ))}
					    </Table> }
                        
                        
                    </Col>
                </Row>
    
            </Container>
        </>
    )
    
}

export default Home