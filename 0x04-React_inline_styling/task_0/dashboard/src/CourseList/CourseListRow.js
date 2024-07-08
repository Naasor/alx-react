import React from "react";
import PropTypes from "prop-types";

const thStyle = {
  backgroundColor: "#e65d6e",
};

const trStyle = {
  backgroundColor: "#ef9aa5"
}

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={trStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={thStyle} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th style={thStyle}>{textFirstCell}</th>
            <th style={thStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
