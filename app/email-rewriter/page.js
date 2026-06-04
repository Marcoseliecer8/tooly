import ToolRunner from "../lib/ToolRunner";
import { TOOLS } from "../lib/tools";

export const dynamic = "force-dynamic";

const TOOL_ID = "email-rewriter";
const tool = TOOLS[TOOL_ID];

export const metadata = {
  title: tool.name + " — Tooly",
  description: tool.blurb,
};

export default function Page() {
  return <ToolRunner toolId={TOOL_ID} tool={tool} />;
}
