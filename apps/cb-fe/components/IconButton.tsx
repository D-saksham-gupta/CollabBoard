import { ReactNode } from "react";

export function IconButton({
  icon,
  onClick,
  activated,
}: {
  icon: ReactNode;
  onClick: () => void;
  activated: boolean;
}) {
  return (
    <div
      className={`text-xsm border p-2 rounded-full cursor-pointer ${activated ? "bg-blue-950" : "bg-white"}  text-yellow-500`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
