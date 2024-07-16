'use client'
import type { Day } from '@prisma/client'
import { type FC, useEffect, useState } from 'react'
import {add, format} from 'date-fns'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { now, OPENING_HOURS_INTERVAL } from '@/app/lib/config'
import { getOpeningTimes, roundToNearestMinutes } from '@/app/lib/helper'

const DynamicCalendar = dynamic(() => import('react-calendar'), { ssr: false })

interface CalendarProps {
  days: Day[]
  closedDays: string[] // as ISO strings
}


const Calendar: FC<CalendarProps> = ({ days, closedDays }) => { 
  const router = useRouter()

  const [date, setDate] = useState<DateType>({
    justDate: null, 
    dateTime: null
  })

  useEffect(() => {
    if (date.dateTime) {
      localStorage.setItem('selectedTime', date.dateTime.toISOString())
      router.push('/menu')
    }
  }, [date.dateTime, router])

  const times = date.justDate && getOpeningTimes(date.justDate, days)

  return (
    <div className='flex h-screen flex-col '>
      {date.justDate ? (
        <div className='flex max-w-lg flex-wrap gap-4'>
          {times?.map((time, i) => (
            <div className='rounded-sm bg-gray-100 p-2' key={`time-${i}`}>
              <button onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))} type='button'>
                {format(time, 'kk:mm')}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <DynamicCalendar
        minDate={now}
        className='REACT-CALENDAR p-2'
        view='month'
        tileDisabled={({ date }) => closedDays.includes(formatISO(date))}
        onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
      />
      )}
    </div>
  )
}

export default Calendar
