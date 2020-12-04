import React from "react";

export default function Form() {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              Type="search"
              className="form-control"
              id="cityTyped"
              autocomplete="off"
              placeholder="Type a city..."
            />
          </div>

          <div className="col-1">
            <button type="submit" className="btn btn-info">
              Go!
            </button>
          </div>

          <div className="col-2">
            <button type="button" className="btn btn-info" id="current">
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
