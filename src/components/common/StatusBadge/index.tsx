import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Define possible status types
export type StatusType =
  | "active"
  | "inactive"
  | "pending"
  | "error"
  | "warning"
  | "success";

// Props interface
interface StatusBadgeProps {
  status: StatusType | string;
  className?: string;
  text?: string;
}

// Status variant styles mapping
const statusStyles: Record<StatusType, string> = {
  active: "bg-green-100 text-green-800 hover:bg-green-100",
  inactive: "bg-gray-100 text-gray-800 hover:bg-gray-100",
  pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
  error: "bg-red-100 text-red-800 hover:bg-red-100",
  warning: "bg-orange-100 text-orange-800 hover:bg-orange-100",
  success: "bg-green-100 text-green-800 hover:bg-green-100",
};

export const StatusBadge = ({ status, className, text }: StatusBadgeProps) => {
  const normalizedStatus = status.toLowerCase() as StatusType;

  const variantStyles = statusStyles[normalizedStatus] || statusStyles.inactive;

  return (
    <Badge
      variant="secondary"
      className={cn("font-medium", variantStyles, className)}
    >
      {text ?? status}
    </Badge>
  );
};
