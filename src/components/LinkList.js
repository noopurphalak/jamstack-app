import React from "react";
import LinkCard from "./LinkCard";

function LinkList({ links, refreshLinks }) {
  return (
    <div>
      <h2 className="my-4">Links</h2>
      {links &&
        links
          .filter((link) => !link.archieved)
          .map((link) => (
            <LinkCard link={link} key={link._id} refreshLinks={refreshLinks} />
          ))}
      <h2 className="my-4">Archived Links</h2>
      {links &&
        links
          .filter((link) => link.archieved)
          .map((link) => (
            <LinkCard link={link} key={link._id} refreshLinks={refreshLinks} />
          ))}
    </div>
  );
}

export default LinkList;
