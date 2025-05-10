import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 transition duration-200 hover:border-neutral-700",
        className,
      )}
    >
      {header && <div className="mb-2 flex-1">{header}</div>}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs text-neutral-300 line-clamp-3">
          {description}
        </div>
      </div>
    </div>
  );
};
