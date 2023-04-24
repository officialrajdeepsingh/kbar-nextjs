import { KBarResults, useMatches } from "kbar";
import ResultItem from "./ResultItem";

export default function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        return typeof item === "string" ? (
          <div className="py-3 px-5"> <h2 className="text-center uppercase"> {item} </h2> </div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
        )
      }
      }
    />
  );
}

