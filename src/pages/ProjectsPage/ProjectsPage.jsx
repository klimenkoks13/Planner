import Button from "../../components/ui/Button/Button";
import { PlusIcon } from "../../components/ui/Icons";
import PageHeader from "../../components/layout/PageHeader/PageHeader";

function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" eyebrow="June 21">
        <Button variant="primary" rightIcon={<PlusIcon />}>
          Add project
        </Button>
      </PageHeader>
    </>
  );
}

export default ProjectsPage;
