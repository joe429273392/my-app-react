import React, {Component} from 'react';
import ClassificationItem from './ClassificationItem';

class Classification extends Component {

  componentWillMount() {
    this.props.getClassification();
  }

  render() {
    let classificationList = this.props.classificationList;
    return <div className="classification">
      <h4 className="main-subtitle"><span className="red-line"></span>Classification</h4>
      <ul>
      {
        classificationList.map((classificationItem, index) => (
          <ClassificationItem key={index} {...classificationItem}/>
        ))
      }
      </ul>
      
    </div>
  }
}

export default Classification;