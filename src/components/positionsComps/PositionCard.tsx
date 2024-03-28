import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";

export default function PositionCard({
  position: { title, company, context, internalRef },
}: {
  position: Position;
}) {

  return (
    <Card className="p-5 ">
      <div className="flex flex-col h-full gap-y-4">
        <CardTitle className="text-[23px] mb-2">{title}</CardTitle>
        <p className="text-[15px]">
          <span className="font-semibold">Company:</span> {company}
        </p>
        <p className="text-[15px]">
          <span className="font-semibold">Internal Ref:</span> {internalRef}
        </p>
        <p className="text-[15px]">
          <span className="font-semibold">Context:</span> {context}
        </p>

        <div className="flex-1 grid items-end ">
          <Button className="w-full border mt-2 " variant={"secondary"}>
            View
          </Button>
        </div>

      </div>
    </Card>
  );
}
