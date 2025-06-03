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
        "mx-auto grid max-w-8xl grid-cols-1 gap-2 md:auto-rows-[18rem] md:grid-cols-3 bg-black font-[var(--font-crimson-text)] text-white",
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
  children,
  onClick,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col rounded-xl border dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden",
        className,
      )}
    >
      {header}
      {icon && <div className="p-4">{icon}</div>}
      {(title || description) && (
        <div className="p-4">
          {title && (
            <div className="font-[var(--font-caveat)] text-2xl text-white">
              {title}
            </div>
          )}
          {description && (
            <div className="font-[var(--font-crimson-text)] text-sm text-white">
              {description}
            </div>
          )}
        </div>
      )}
      <div className="flex-1 font-[var(--font-crimson-text)] text-white">{children}</div>
    </div>
  );
};