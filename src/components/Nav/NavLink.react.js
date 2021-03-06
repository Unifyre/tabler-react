// @flow
import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +active?: boolean,
  +icon?: string,
  +to?: string,
  +hasSubNav?: boolean,
  +rootRef?: (?HTMLElement) => void,
|};

function NavLink({
  children,
  className,
  RootComponent,
  icon,
  active = false,
  to,
  hasSubNav,
  rootRef,
}: Props): React.Node {
  const classes = cn({ "nav-link": true, active: active }, className);

  const childrenForAll = (
    <React.Fragment>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{" "}
        </React.Fragment>
      )}
      {children}
    </React.Fragment>
  );

  return RootComponent ? (
    <RootComponent className={classes} to={to} exact>
      {childrenForAll}
    </RootComponent>
  ) : (
    <a className={classes} href={to} ref={rootRef}>
      {childrenForAll}
    </a>
  );
}

NavLink.displayName = "Nav.Link";

/** @component */
export default NavLink;
