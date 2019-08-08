import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import './preview.scss';

class Preview extends Component {

    render() {
        return (
            <Row className="preview">
                <Col sm='12' md='6' className="image" style={{backgroundImage: this.props.imageUrl}} />
                <Col sm='12' md='6' className="description">

                    <h2>{this.props.title}</h2>
                    
                    <div className="infos">
                        <span className="category">{this.props.category}</span>
                        <span className="date">
                            <FormattedMessage id="Preview.published_on"/> {this.props.date}
                        </span>
                    </div>

                    <div className="content" dangerouslySetInnerHTML={{__html:this.props.content}} />

                    <NavLink className="main" to={this.props.linkTo}>
                        <FormattedMessage id="Preview.read_more"/>
                    </NavLink>
                    
                </Col>
            </Row>
        );
    }

}

export default Preview;
