/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import City from "views/City.js";
import Developer from "views/Developer.js";
import ProjectType from "views/ProjectType.js";
import Team from "views/Team.js";
import Project from "views/Project.js";
import All from "views/All.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
// import Popoto from "views/Popoto/Popoto";
import CypherViz from "views/CypherViz";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
    driverNeo4j: false
  },/*
  {
    path: "/projects",
    name: "Projects",
    rtlName: "Projects",
    icon: "tim-icons icon-world",
    component: CypherViz,
    layout: "/admin",
    driverNeo4j: true
  },*/
  {
    path: "/all",
    name: "All",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: All,
    layout: "/admin"
  },
  {
    path: "/cities",
    name: "Cities",
    rtlName: "الرموز",
    icon: "tim-icons icon-puzzle-10",
    component: City,
    layout: "/admin"
  },
  {
    path: "/developers",
    name: "Developers",
    rtlName: "الرموز",
    icon: "tim-icons icon-single-02",
    component: Developer,
    layout: "/admin"
  },
  {
    path: "/projects",
    name: "Projects",
    rtlName: "الرموز",
    icon: "tim-icons icon-align-center",
    component: Project,
    layout: "/admin"
  },
  {
    path: "/projectTypes",
    name: "Project Type",
    rtlName: "خرائط",
    icon: "tim-icons icon-paper",
    component: ProjectType,
    layout: "/admin"
  },
  {
    path: "/teams",
    name: "Teams",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Team,
    layout: "/admin"
  },/*
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
    driverNeo4j: false
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
    driverNeo4j: false
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
    driverNeo4j: false
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl",
    driverNeo4j: false
  }*/
];
export default routes;
