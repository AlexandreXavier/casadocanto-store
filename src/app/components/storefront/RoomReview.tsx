import { FC } from 'react';
import { StarIcon } from "lucide-react";


const RoomReview: FC<{ roomId: string }> = ({ roomId }) => {
 

  console.log(roomId);

  return (
    <div className="mt-11 flex items-center gap-1">
           <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" /> 
          </div>
  );
};

export default RoomReview;
