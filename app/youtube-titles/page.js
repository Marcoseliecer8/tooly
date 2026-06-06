import ToolRunner from "../lib/ToolRunner";
import ToolSeo from "../lib/ToolSeo";
import { TOOLS } from "../lib/tools";

const TOOL_ID = "youtube-titles";
const tool = TOOLS[TOOL_ID];

export const metadata = {
  title: tool.name + " — Tooly",
  description: tool.blurb,
};

export default function Page() {
  return (
    <>
      <ToolRunner toolId={TOOL_ID} tool={tool} />
      <ToolSeo tool={tool} />
    </>
  );
}
