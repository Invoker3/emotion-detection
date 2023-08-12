import Dashboard from "views/Dashboard.js";

var routes = [
  {
    path: "/dashboard",
    name: "Emotion Detection from Text",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  }
];
export default routes;
