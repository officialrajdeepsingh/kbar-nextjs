import * as React from "react";
import { ActionId, KBarAnimator, KBarPortal, KBarPositioner, KBarSearch, ActionImpl } from "kbar";
const ResultItem = React.forwardRef(({
  action,
  active,
  currentRootActionId,
}: {
  action: ActionImpl;
  active: boolean;
  currentRootActionId: ActionId;
},
  ref: React.Ref<HTMLDivElement>
) => {

  return (
    <div ref={ref} className={active ? `px-3 py-2 leading-none rounded text-violet11 flex items-center justify-between bg-violet4` : `px-3 py-2 leading-none rounded text-violet11 flex items-center justify-between hover:bg-violet4`} >
      <header className="flex items-center">
        {action.icon}
        <div className="rounded flex flex-col items-start justify-center relative select-none outline-none hover:bg-violet4">
          <h1 className="text-lg text-violet11"> {action.name} </h1>
          <p className="text-md text-violet9 py-1"> {action.subtitle} </p>
        </div>
      </header>
      <div className="text-[15px] leading-none text-violet11 rounded flex justify-between items-center relative select-none outline-none hover:bg-violet4">
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: "4px 6px",
                  background: "rgba(0 0 0 / .1)",
                  borderRadius: "4px",
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
})

export default ResultItem 
