import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";


const user = new User();
const company = new Company();
console.log(user);
console.log(company);
const custoMap = new CustomMap("map");
custoMap.addMarker(user);
custoMap.addMarker(company);
