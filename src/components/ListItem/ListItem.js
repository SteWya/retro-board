import React from "react";

function ListItem(props) {
  return (
    <li className="list-group-item">
      {props.children}
      <button
        type="button"
        className="btn btn-link float-right"
        aria-label="Delete"
        onClick={() => props.delete(props.index)}
      />
    </li>
  );
}

export default ListItem;
