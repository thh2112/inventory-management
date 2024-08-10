import { ROUTES_PATH } from './route-path';

function addSlashToPath(route: string): string {
  return `/${route}`;
}
const routeInternal = {
  inventory: addSlashToPath(ROUTES_PATH.INVENTORY),
  notFound: addSlashToPath(ROUTES_PATH.NOT_FOUND),
};

export { routeInternal };
