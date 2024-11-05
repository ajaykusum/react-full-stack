import React from 'react';
import AnimatedList from './AnimatedList';

const notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

const List = ({ name, description, icon, color, time }) => {
  return (
    <div className='flex-shrink-0 flex gap-2 items-center relative min-w-max w-[600px] max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white shadow-md mb-2
    '>

      <div
        className='flex rounded-xl w-10 h-10 items-center justify-center'
        style={{ backgroundColor: color }}
      >
        <span className='text-lg'>{icon}</span>
      </div>
      <div>
        <div>
          <span className='font-semibold'>{name}</span>
          <span className='px-1'>.</span>
          <span className='text-slate-600 text-sm'>{time}</span>
        </div>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  )
}

const Notification = () => {
  return (
    <div className='flex flex-col gap-2 h-[400px] bg-slate-100 rounded-xl p-2 overflow-auto'>
      {
        notifications.map((e, index) => (
          <List
            key={index}
            name={e.name}
            description={e.description}
            icon={e.icon}
            color={e.color}
            time={e.time}
          />
        ))
      }
    </div>
  )
}

export default Notification
