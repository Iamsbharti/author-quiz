import React from "react";
import "../styles.css";
import "../bootstrap.min.css";

function Continue() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All Informations are from{" "}
          <a href="https://www.goodreads.com/">GoodReads</a>
        </p>
      </div>
    </div>
  );
}
export default Continue;
