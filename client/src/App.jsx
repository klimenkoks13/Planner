import "./App.css";
import { Routes, Route } from "react-router";
import PageLayout from "./components/layout/PageLayout/PageLayout";
import TodayPage from "./pages/TodayPage/TodayPage";
import CalenderPage from "./pages/CalenderPage/CalenderPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<TodayPage />} />
        <Route path="/calendar" element={<CalenderPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/statistic" element={<StatisticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "start",
    //     gap: "10px",
    //     backgroundColor: "#ffffff",
    //   }}
    // >
    //   {/* <Sidebar /> */}
    //   <ArrowRightIcon color="black" />
    //   <FolderIcon color="#22c55e" />
    //   <h1>IJG</h1>

    //   <Button variant="primary" rightIcon={<PlusIcon />}>
    //     Add project
    //   </Button>

    //   <Button variant="secondary" rightIcon={<PlusIcon />}>
    //     Add project
    //   </Button>

    //   <Button fullWidth leftIcon={<PlusIcon />}>
    //     Add project
    //   </Button>

    //   <Button rightIcon={<PlusIcon />} aria-label="Add task"></Button>

    //   <Input placeholder="Add new task..." aria-label="Add new task" />

    //   <FormField label="Add task" id={1} placeholder="Add new task..." />

    //   <InputWithSubmit placeholder="Add new task..." icon={<PlusIcon />} />

    //   <label>
    //     <Checkbox checked={true} onChange={(checked) => !checked} />
    //     <span>Finalize Q3 strategy</span>
    //   </label>

    //   {/* без подписи рядом обязателен aria-label */}
    //   <Checkbox aria-label="Mark as done" />

    //   <div style={{ width: "300px" }}>
    //     <Card>
    //       <SectionHeader header="tasks" counter="2/5" />
    //       <InputWithSubmit placeholder="Add new task..." icon={<PlusIcon />} />
    //     </Card>
    //   </div>

    //   <div style={{ width: "800px", height: "200px" }}>
    //     <PageHeader title="Sunday, June 21" eyebrow={2026}>
    //       <Button variant="secondary" leftIcon={<ArrowRightIcon />}>
    //         Previos month
    //       </Button>
    //       <Button variant="primary" rightIcon={<ArrowRightIcon />}>
    //         Next month
    //       </Button>
    //     </PageHeader>
    //   </div>
    // </div>
  );
}

export default App;
