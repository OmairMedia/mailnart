import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [
  {
  id: "Account",
  icon: "iconsminds-shop",
  label: "Account",
  to: `${adminRoot}/dashboard/account`,
},
{
  id: "Orders",
  icon: "iconsminds-shop",
  label: "Orders",
  to: `${adminRoot}/dashboard/orders`,
}
];
export default data;
