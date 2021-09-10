import React, { Component } from 'react';
import EmailComponent from './Email';

class EmailList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emails: [... props.emails]
        }
    }

    handleDelete = (idx) => {
        const emails = this.state.emails; 
        emails.splice(idx, 1); 
        this.setState({ emails })
    }

    render() {
        return (
            this.state.emails
            .map((email, idx) => 
              <EmailComponent
              from={email.from}
              subject={email.subject}
              to={email.to}
              important={Math.random() < 0.3}
              message={email.message}
              onDelete={() => this.handleDelete(idx)} />)
          );
    }

}

export default EmailList;