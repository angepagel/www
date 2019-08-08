import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './previewSkeleton.scss';

class PreviewSkeleton extends Component {

    render() {
        let skeletons = [];

        for (let i=0; i<this.props.skeletons; i++) {
            skeletons.push(
                <Row className="skeleton">
                    <Col sm='12' md='6' className="image"/>
                    <Col sm='12' md='6' className="body">
                        <div className="title"/>
                        <div className="infos"/>
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                        <div className="button"/>
                    </Col>
                </Row>
            );
        }

        return (
            <div className="preview-skeleton">{skeletons}</div>
        );
    }

}

PreviewSkeleton.defaultProps = {
    skeletons: 1
}

export default PreviewSkeleton;
