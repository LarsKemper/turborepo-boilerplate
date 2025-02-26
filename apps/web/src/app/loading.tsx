import { Loader2 } from 'lucide-react';
import React from 'react';

function RootLoading() {
  return (
    <div className="flex justify-center items-center size-full">
      <Loader2 className="animate-spin" size="3rem" />
    </div>
  );
}

export default RootLoading;
