import React, { Suspense } from "react";

const IconLoader = ({
  iconName,
  width = 16,
  height = 16,
}: {
  iconName: string;
  width?: number;
  height?: number;
}) => {
  const IconComponent = React.lazy(() => import(`../vectors/${iconName}.tsx`));

  return (
    <Suspense fallback={<div>...</div>}>
      <IconComponent width={width} height={height} />
    </Suspense>
  );
};

export default React.memo(IconLoader);
