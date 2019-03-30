import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mobileThresholdPixels, colors, fontSizes } from '../StyledComponents';
import scrollToRef from '../../services/scrollToRef';

import routes from '../../config/routes';

const List = styled.ul`
  width: 55vw;
  columns: 2 100px;
  column-gap: 3rem;
  list-style: none;
  column-rule: 1px solid ${colors.white};

  @media (max-width: ${mobileThresholdPixels}) {
  }
`;

const ListItiem = styled.li`
  font-family: 'Montserrat';
  font-size: ${fontSizes.l};
  margin: 15px;

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.m};
  }
`;

const Label = styled.p`
  color: ${colors.white};
  text-decoration: none;

  :hover {
    font-weight: 500;
  }

  :active {
    text-decoration: none;
  }
`;


const MainMenu = () => (
  <List>
    {routes
      .filter(elem => elem.mainMenu)
      .map((route, i) => (
        <ListItiem key={route.url}>
          <NavLink
            key={i}
            exact={true}
            to={route.url}
            onClick={() => scrollToRef(route.id)}
            activeClassName='active'
            style={{
              textDecorationLine: "none",
              textDecoration: "none"
            }}
          >
            <Label>{route.textMenu}</Label>
          </NavLink>
        </ListItiem>
      ))}
  </List>
);

export default MainMenu; 