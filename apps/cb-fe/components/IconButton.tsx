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
      className={`border p-3 rounded-full cursor-pointer ${activated ? "bg-white" : "bg-gray-800"}  text-yellow-500`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
