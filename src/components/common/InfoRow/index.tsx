type InfoRowProps = {
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  minWidth?: number;
};

export const InfoRow = ({
  label,
  children,
  icon,
  minWidth = 140,
}: InfoRowProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center items-start">
      <p
        style={{ width: minWidth }}
        className={`text-sm font-bold  flex gap-2 items-center`}
      >
        {icon} {label}
      </p>
      <div className={"flex items-center gap-3"}>{children}</div>
    </div>
  );
};
