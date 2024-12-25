import { useLocation } from 'react-router-dom';
import { routeColors } from '../config/theme';
import { ROUTES } from '../config/routes';
import type { RouteTheme } from '../config/theme';

export function useRouteTheme(): RouteTheme {
  const location = useLocation();
  const path = location.pathname;

  if (path.includes('/challenge')) {
    return routeColors[ROUTES.CHALLENGE];
  }
  if (path.includes('/question')) {
    return routeColors[ROUTES.ANSWER];
  }
  return routeColors[ROUTES.PERSONA]; // default theme
}