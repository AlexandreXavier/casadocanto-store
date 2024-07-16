import type { categories } from '@/app/lib/categories'

type DateTime = {
  justDate: Date | null
  dateTime: Date | null
}

type Categories = typeof categories[number]
