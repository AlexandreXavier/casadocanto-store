'use client'
import YouTube from 'react-youtube';
import {Separator} from '@/components/ui/separator';


const EditedVideos = () => {
    const videoOptions = {
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1,
        },
        width: '480',
        height: '270',
        className: 'rounded-xl'
        
      };
  return (
    <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
                <h3 className="flex justify-center pb-4 font-bold tracking-tight text-2xl lg:text-3xl ">Aulas Yoga</h3>
                <div className="flex items-center justify-center">
                    <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
                </div>

                <div className="flex justify-center">
                    <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                        <YouTube videoId="3grXf0JqSXo" opts={videoOptions}/>
                        <YouTube videoId="CdpoH6uv2YQ" opts={videoOptions}/>
                        <YouTube videoId="HS_4XLUygMY" opts={videoOptions}/>
                        <YouTube videoId="knTO94w2Nl4" opts={videoOptions}/>
                    </div>
                </div>
    </div>
  )
}

export default EditedVideos
