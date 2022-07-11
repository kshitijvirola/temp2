import {
  CheckCircleOutlined,
  BookOutlined,
  CalculatorOutlined,
  TeamOutlined,
  AppstoreAddOutlined,
  LeftCircleOutlined,
  UserOutlined, RedoOutlined
} from "@ant-design/icons";
// FileOutlined,MenuOutlined,ProfileOutlined,

const MenuItem = [
  { name: "Home", icon: <CalculatorOutlined /> },
  { name: "Employee", icon: <BookOutlined /> },
  { name: "Master", icon: <CheckCircleOutlined /> },
  { name: "Appraisal", icon: <AppstoreAddOutlined /> },
  { name: "Report", icon: <AppstoreAddOutlined />  },

  // { name: "Appraisal", icon: <AppstoreAddOutlined /> },
  // { name: "Basic Profile", icon: <UserOutlined /> },
  // { name: "KRA", icon: <AppstoreAddOutlined /> },
  // { name: "Report", icon: <BookOutlined /> },
];
const TlItem = [
  {
    name: "Profile",
    icon: <CheckCircleOutlined />,
    suboption: [
      { name: "My Appraisal", icon: <BookOutlined /> },
      { name: "My Profile", icon: <TeamOutlined /> },
    ],
  },
  {
    name: "Appraisal",
    icon: <BookOutlined />,
    suboption: [
      // { name: "Employee", icon: <ProfileOutlined /> },
      { name: "Add Appraisal", icon: <AppstoreAddOutlined /> },
    ],
  },
];
const EmpItem = [
  // { name: "My Profile", icon: <CheckCircleOutlined /> },
  { name: "My Appraisal", icon: <BookOutlined /> },
  { name: "Report", icon: <AppstoreAddOutlined />  },
];
const MobileMenu = [
  { name: "Profile", icon: <UserOutlined /> },
  { name: "Change Password", icon: <RedoOutlined /> },
  { name: "Log-out", icon: <LeftCircleOutlined /> },
];
export { MenuItem, TlItem, EmpItem, MobileMenu };
