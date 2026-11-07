import Card from "../../../components/ui/Card/Card";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";
import Textarea from "../../../components/ui/Textarea/Textarea";

function Notes({ className, ...rest }) {
  return (
    <Card className={className} {...rest}>
      <SectionHeader header="notes" />

      <Textarea placeholder="Write note..." />
    </Card>
  );
}

export default Notes;
