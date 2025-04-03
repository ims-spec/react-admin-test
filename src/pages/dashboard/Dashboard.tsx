import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";

export const Dashboard = () => {
  return (
    <Card>
      <Title title="Welcome to the administration" />
      <CardContent sx={{ width: "1250px", padding:"50px"}}>
        Lorem ipsum sic dolor amet...
      </CardContent>
    </Card>
  );
};
