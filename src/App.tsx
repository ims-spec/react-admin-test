import { createClient } from "@supabase/supabase-js";
import { Admin, Resource } from "react-admin";
import { supabaseDataProvider } from "ra-supabase";
import { Dashboard } from "./pages/dashboard/Dashboard";
//resources
//plants
import { PlantsList } from "./pages/plants/PlantsList";
import { PlantsShow } from "./pages/plants/PlantsShow";
import { PlantsCreate } from "./pages/plants/PlantsCreate";
import { PlantsEdit } from "./pages/plants/PlantsEdit";

//process
import { ProcessList } from "./pages/processes/ProcessList";
import { ProcessCreate } from "./pages/processes/ProcessCreate";
import { ProcessEdit } from "./pages/processes/ProcessEdit";
import { ProcessShow } from "./pages/processes/ProcessShow";
// Создание клиента Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

//icons
import FactoryIcon from "@mui/icons-material/Factory";
import MemoryIcon from "@mui/icons-material/Memory";

import { MenuLayout } from "./components/MenuLayout";

// Провайдер данных для React-Admin
const dataProvider = supabaseDataProvider({
  instanceUrl: import.meta.env.VITE_SUPABASE_URL,
  apiKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  supabaseClient: supabase,
});

// Основной компонент приложения
export const App = () => (
  <Admin layout={MenuLayout} dataProvider={dataProvider} dashboard={Dashboard}>
    
    <Resource
      name="plants"
      list={PlantsList}
      create={PlantsCreate}
      edit={PlantsEdit}
      show={PlantsShow}
      icon={FactoryIcon}
    />
    <Resource
      name="processes"
      list={ProcessList}
      create={ProcessCreate}
      edit={ProcessEdit}
      show={ProcessShow}
      icon={MemoryIcon}
    />
  </Admin>
);
