import PageHeader from "../../components/layout/PageHeader/PageHeader";
import Button from "../../components/ui/Button/Button";
import { ArrowRightIcon } from "../../components/ui/Icons";

function CalenderPage() {
  return (
    <>
      <PageHeader title="Month planner" eyebrow="June 21">
        <Button variant="secondary" leftIcon={<ArrowRightIcon />}>
          Previos month
        </Button>
        <Button variant="primary" rightIcon={<ArrowRightIcon />}>
          Next month
        </Button>
      </PageHeader>
    </>
  );
}

export default CalenderPage;
