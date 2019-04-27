import React from "react";

export const LazyLoadRoute = (route: string) => React.lazy(() => import(`${route}`));

