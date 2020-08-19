/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../BreadCrumbs';
import { DocPropTypeShape, UserPropTypeShape } from '../../propTypes';

const DocDetails = ({ doc, editors }) => {
  const { title, description, fileUrl } = doc;

  // const history = [
  //   { to: '/documents', title: 'Documents' },
  //   { to: `/documents/${doc.id}`, title },
  // ];

  return (
    <div>
      {/* <BreadCrumbs history={history} /> */}
      <Link to="/documents" className="documents-link">
        Back to Documents List
      </Link>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <p>Editors</p>
        <ul>
          {editors.length > 0 &&
            editors.map((editor) => (
              <li key={editor.id}>{editor.firstName}</li>
            ))}
        </ul>
        <a href={fileUrl} download target="_blank" rel="noreferrer">
          Download
        </a>
      </div>
    </div>
  );
};

DocDetails.propTypes = {
  doc: DocPropTypeShape,
  editors: PropTypes.arrayOf(UserPropTypeShape),
};

DocDetails.defaultProps = {
  doc: {},
  editors: [],
};

export default DocDetails;