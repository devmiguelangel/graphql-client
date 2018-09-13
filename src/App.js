import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_COURSES = gql`
  {
    courses {
      title
      description
      professor {
        name
      }
    }
  }
`;

const Courses = () => (
  <Query query={GET_COURSES}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error} :(</p>
        
        return (
          <Fragment>
            {
              data.courses.map((course, index) =>
                <div className="row border rounded mb-2" style={{ backgroundColor: '#ECEFF1' }} key={index}>
                  <div className="col p-2">
                    <h4>{course.title}</h4>
                    <p className="lead" style={{ fontSize: '.8rem', textAlign: 'justify', }}>
                      {course.description}
                    </p>
                    <h5>Profesor: 
                      <span className="badge badge-secondary">
                        {course.professor.name}
                      </span>
                    </h5>
                  </div>
                </div>
              )
            }
          </Fragment>
        )
      }
    }
  </Query>
);


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Lista de Cursos</h1>

        <Courses />
      </div>
    );
  }
}

export default App;
