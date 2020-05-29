import React from "react";
//rafc shortcut to create functional componet
// Definition of Component just like defining the class in C

//Way 1 Using props
export const Layout = (props) => {
  return (
    //   To apply bootstap copy link from cdn and paste in public/indexedDB.html
    // https://getbootstrap.com/docs/4.0/getting-started/introduction/
    <div className="jumbotron">
      <h1 className="display-3">{props.title}</h1>
      <h3 className="display-1">{props.name}</h3>
      <p className={props.className}>{props.children}</p>
      <hr className="my-2" />

      <p className="lead">
        <a
          className="btn btn-primary btn-lg"
          href="Jumbo action link"
          role="button"
        >
          {props.description}
        </a>
      </p>
    </div>
  );
};
//Way2 Without using props
// for that we have to pass the object/ parameter within ({ title, name.....}) insttead of writing (props)
// we can also pass a default parameter to props paramete
const LayoutwithoutProps = ({
  title = "Parbati", // passing the default parameter
  name,
  description,
  children,
  className = "btn btn-danger", // passing the default parameter
}) => {
  return (
    //   To apply bootstap copy link from cdn and paste in public/indexedDB.html
    // https://getbootstrap.com/docs/4.0/getting-started/introduction/
    <div className={className}>
      <h1 className="display-3">{title}</h1>
      <h3 className="display-1">{name}</h3>
      <p className={className}>{children}</p>
      <hr className="my-2" />

      <p className="lead">
        <a
          className="btn btn-primary btn-lg"
          href="Jumbo action link"
          role="button"
        >
          {description}
        </a>
      </p>
    </div>
  );
};
export default LayoutwithoutProps;
