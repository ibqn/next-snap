import TodoIcon from './todo.svg'
import CalendarIcon from './calendar.svg'
import RemindersIcon from './reminders.svg'
import PlanningIcon from './planning.svg'

export const navLinks = [
  {
    name: 'feature',
    submenu: [
      { name: 'Todo List', icon: TodoIcon },
      { name: 'Calendar', icon: CalendarIcon },
      { name: 'Reminders', icon: RemindersIcon },
      { name: 'Planning', icon: PlanningIcon },
    ],
  },
  {
    name: 'company',
    submenu: [{ name: 'history' }, { name: 'our team' }, { name: 'blog' }],
  },
  { name: 'careers' },
  { name: 'about' },
]
