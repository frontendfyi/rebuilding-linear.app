import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        "mx-auto max-w-container-max-width px-container-padding",
        className
      )}
    >
      {children}
    </div>
  );
};
