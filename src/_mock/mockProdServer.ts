import { createProdMockServer } from "vite-plugin-mock/client";

import dashboardModule from "./dashboard";
import listModule from "./list";
import managementModule from "./management";
import userModule from "./user";

export function setupProdMockServer() {
  createProdMockServer([
    ...dashboardModule,
    ...listModule,
    ...managementModule,
    ...userModule,
  ]);
}
