import React from 'react';
import {Table, Button} from 'semantic-ui-react';
import {Link} from "react-router-dom";
class About extends React.Component {
    constructor(props) {
        super(props);
        localStorage.getItem('firstName') ;
        localStorage.getItem('lastName');
        localStorage.getItem('gender');
        this.state= {
            first:[],
            last:[],
            gen:[],
        }
    }
    changeTable = () => {
        return (
            <Table.Row>
                <Table.Cell content={localStorage.getItem('firstName')}/>
                <Table.Cell content={localStorage.getItem('lastName')}/>
                <Table.Cell content={localStorage.getItem('gender')}/>
            </Table.Row>
        )
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('gender');
    }

    render() {
        return (
            <div>

                <Table celled>
                    <Table.Header>
                        <Table.Row>
                         <Table.HeaderCell>Firstname</Table.HeaderCell>
                            <Table.HeaderCell>Lastname</Table.HeaderCell>
                          <Table.HeaderCell>Gender</Table.HeaderCell>
                      </Table.Row>
                 </Table.Header>
                 {this.changeTable()}
                </Table>
                <Button> <Link to="/">Log out</Link></Button>
            </div>


        );

    }
}

export default About;



